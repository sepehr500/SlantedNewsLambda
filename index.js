// For development/testing purposes
var brietbart = require('./Sites/breitbart');
var NYT = require('./Sites/newYorkTimes');
var FoxNews = require('./Sites/foxNews');

var promises = [brietbart, NYT, FoxNews];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		console.log(result);
		callback();
	});
};
