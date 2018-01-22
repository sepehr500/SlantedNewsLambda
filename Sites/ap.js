var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.ap.url).then(
	$ => {
		const node = $('.verticalPrimary').find('h3').first();
		return createPayload.createPayload(siteInfo.ap.name, node.parent().attr('href'), siteInfo.ap.url, node.text());
	}
);
