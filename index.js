// For development/testing purposes
var brietbart = require('./Sites/breitbart');

var promises = [brietbart];

exports.handler = function(event, context, callback) {
	Promise.all(promises).then(result => {
		console.log(result);
		callback();
	});
};
