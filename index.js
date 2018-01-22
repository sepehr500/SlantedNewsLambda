// For development/testing purposes
var writeToDynamo = require('./writeToDynamo'),
	brietbart = require('./Sites/breitbart'),
	foxNews = require('./Sites/foxNews'),
	npr = require('./Sites/npr'),
	nyt = require('./Sites/newYorkTimes'),
	dailyCaller = require('./Sites/dailyCaller'),
	drudge = require('./Sites/drudge'),
	blaze = require('./Sites/theBlaze');

var promises = [
	brietbart, 
	foxNews, 
	npr, 
	nyt,
	dailyCaller,
	blaze,
	drudge
];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		console.log(mergedObj);
		writeToDynamo(mergedObj);
		callback();
	});
};
