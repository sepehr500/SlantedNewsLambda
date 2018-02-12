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
	economist = require('./Sites/theEconomist'),
	wsj = require('./Sites/wjs'),
	vox = require('./Sites/vox'),
	washPo = require('./Sites/washPo'),
	politico = require('./Sites/politico'),
	cbs = require('./Sites/cbs');

var promises = [
	// ap,
	blaze,
	brietbart,
	cbs,
	dailyCaller,
	drudge,
	economist,
	foxNews, 
	hill,
	npr, 
	nyt,
	reuters,
	vox,
	washPo,
	wsj,
	politico
];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		console.log(mergedObj);
		// writeToDynamo(mergedObj);
		callback();
	}).catch(err => console.log(err));
};
