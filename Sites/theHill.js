var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theHill.url).then(
	$ => {
		const node = $('.top-story-headline').find('a');
		return createPayload.createPayload(siteInfo.theHill.name, node.attr('href'), siteInfo.theHill.url, node.attr('title'));
	}
);
