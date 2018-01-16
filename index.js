// For development/testing purposes
var brietbart = require('./Sites/breitbart')

var proms = [brietbart];

exports.handler = function(event, context, callback) {
  Promise.all(proms).then(result => {
    console.log(result);
    callback();
  })
};
