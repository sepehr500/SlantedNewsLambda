var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.foxNews.url).then(
	$ => {
		const node = $('.has-hero').find('.info-header').find('a');
		return createPayload({
			name: siteInfo.foxNews.name, 
			url: siteInfo.foxNews.url, 
			node
		});
	}
);