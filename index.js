// For development/testing purposes
var writeToDynamo = require('./writeToDynamo'),
	brietbart = require('./Sites/breitbart'),
	foxNews = require('./Sites/foxNews'),
	npr = require('./Sites/npr'),
	nyt = require('./Sites/newYorkTimes');

var promises = [
	brietbart, 
	foxNews, 
	npr, 
	nyt
];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		console.log(mergedObj);
		writeToDynamo(mergedObj);
		callback();
	});
};
