var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.TheBlaze.url).then(
	$ => {
		const node = $('.need-to-know-link').first();
		return createPayload(siteInfo.TheBlaze.name, siteInfo.TheBlaze.url, node, false);
	}
);