var secrets = require('./secrets');
var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient(
	{
		accessKeyId: secrets.AWS_ACCESS_KEY_ID,
		secretAccessKey: secrets.AWS_SECRET_ACCESS_KEY,
		region: secrets.AWS_REGION
	}
);

module.exports = function(obj) {
	const dateObj = new Date();
	const month = dateObj.getUTCMonth() + 1; //months from 1-12
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();

	const newdate = year + '/' + month + '/' + day;
	var params = {
		Item: {
			Main: newdate,
			Stamp: Date.now(),
		},
		TableName: 'SlantedNews'
	};
  
	params.Item = Object.assign(params.Item, obj);
	console.log(params);
	docClient.put(params, function(err, data){
		if (err) console.log(err);
		else console.log(data);
	});

};