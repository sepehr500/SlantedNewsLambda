var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.FoxNews.url).then(
	$ => {
		const node = $('.has-hero').find('.info-header').find('a');
		return createPayload(siteInfo.FoxNews.name, '', node);
	}
);