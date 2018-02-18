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
	const rand = Math.floor(Math.random() * 1000000000);
	var params = {
		Item: {
			Main: rand.toString(),
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