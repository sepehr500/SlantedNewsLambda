
var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload')

const url = 'http://www.breitbart.com' ;

module.exports = cheerioFetch(url).then(
    $ =>{
      const node = $('.title', '.top-article').find('a');
      return createPayload('Breitbart',url, node);
    }
  );