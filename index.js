// For development/testing purposes
var writeToDynamo = require('./writeToDynamo');
var brietbart = require('./Sites/breitbart');
var NYT = require('./Sites/newYorkTimes');
var FoxNews = require('./Sites/foxNews');

var promises = [brietbart, NYT, FoxNews];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		writeToDynamo(mergedObj);
		callback();
	});
};
