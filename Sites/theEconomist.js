var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theEconomist.url).then(
	$ => {
		const node = $('.teaser__group-text').first();
		const parent = node.parent();
		return createPayload.createPayload(siteInfo.theEconomist.name, parent.attr('href'), siteInfo.theEconomist.url, node.attr('title'));
	}
);
