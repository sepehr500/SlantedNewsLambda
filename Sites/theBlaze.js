var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theBlaze.url).then(
	$ => {
		const link = $('.link-inverse').first().attr('href');
		const text = $('.display-text').find('span').first().text();
		return createPayload.createPayload(siteInfo.theBlaze.name, link, siteInfo.theBlaze.url, text);
	}
);