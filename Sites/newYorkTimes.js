var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.NYT.url).then(
	$ => {
		const node = $('.story-heading').first().find('a');
		return createPayload(siteInfo.NYT.name, siteInfo.NYT.url, node);
	}
);
