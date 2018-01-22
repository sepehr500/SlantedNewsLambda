var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.reuters.url).then(
	$ => {
		const node = $('.story-title').find('a').first();
		return createPayload({
			name: siteInfo.reuters.name, 
			url: siteInfo.reuters.url, 
			node: node
		});
	}
);
