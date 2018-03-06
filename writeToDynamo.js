var secrets = require('./secrets');
var AWS = require('aws-sdk');

const curTime = Date.now();

var docClient = new AWS.DynamoDB.DocumentClient(
	{
		accessKeyId: secrets.AWS_ACCESS_KEY_ID,
		secretAccessKey: secrets.AWS_SECRET_ACCESS_KEY,
		region: secrets.AWS_REGION
	}
);

const writeCurrent = (obj) => {
	var params = {
		Item: {
			Main: 'current',
			Stamp: 1,
		},
		TableName: 'SlantedNews'
	};
  
	params.Item = Object.assign(params.Item, obj, {time: curTime});
	console.log(params);
	docClient.put(params, function(err, data){
		if (err) console.log(err);
		else console.log(data);
	});

};

const writeHistory = (obj) => {
	var params = {
		Item: {
			Main: curTime.toString(),
			Stamp: curTime,
		},
		TableName: 'SlantedNews'
	};
  
	params.Item = Object.assign(params.Item, obj, {time: curTime});
	console.log(params);
	docClient.put(params, function(err, data){
		if (err) console.log(err);
		else console.log(data);
	});

};

module.exports = function(obj) {
	writeCurrent(obj);
	writeHistory(obj);
};