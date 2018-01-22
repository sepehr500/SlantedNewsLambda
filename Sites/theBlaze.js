var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theBlaze.url).then(
	$ => {
		const node = $('.need-to-know-link').first();
		return createPayload.createPayloadWithNode(siteInfo.theBlaze.name, siteInfo.theBlaze.url, node);
	}
);