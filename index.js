// For development/testing purposes
exports.handler = function(event, context, callback) {
	const clusterData = require('./cluster');
	var writeToDynamo = require('./writeToDynamo');
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
		huffPo= require('./Sites/huffPo');
	// cbs = require('./Sites/cbs'),
	// cnn = require('./Sites/cnn');

	var promises = [
	// ap,
		blaze,
		brietbart,
		// cbs,
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
		politico,
		huffPo,
	// cnn
	];

	Promise.all(promises).then(result => {
		const mergedObj = result.reduce((acc, cur) => Object.assign(acc, cur), {});
		writeToDynamo(mergedObj, callback);
	}).catch(err => console.log(err));
};
