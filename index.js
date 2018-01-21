// For development/testing purposes
var brietbart = require('./Sites/breitbart'),
	npr = require('./Sites/npr');

var promises = [
	brietbart,
	npr
];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		console.log(result);
		callback();
	});
};
