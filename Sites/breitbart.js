var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.breitbart.url).then(
	$ => {
		const node = $('.title', '.top-article').find('a');
		return createPayload.createPayloadWithNode(siteInfo.breitbart.name, siteInfo.breitbart.url, node);
	}
);
