// For development/testing purposes
// var writeToDynamo = require('./writeToDynamo'),
var	brietbart = require('./Sites/breitbart'),
	foxNews = require('./Sites/foxNews'),
	npr = require('./Sites/npr'),
	nyt = require('./Sites/newYorkTimes'),
	dailyCaller = require('./Sites/dailyCaller'),
	drudge = require('./Sites/drudge'),
	blaze = require('./Sites/theBlaze'),
	// ap = require('./Sites/ap'),
	reuters = require('./Sites/reuters'),
	hill = require('./Sites/theHill'),
	economist = require('./Sites/theEconomist');

var promises = [
	// ap,
	blaze,
	brietbart, 
	dailyCaller,
	drudge,
	economist,
	foxNews, 
	hill,
	npr, 
	nyt,
	reuters
];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		console.log(mergedObj);
		// writeToDynamo(mergedObj);
		callback();
	}).catch(err => console.log(err));
};
