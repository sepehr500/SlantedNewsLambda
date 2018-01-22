var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theEconomist.url).then(
	$ => {
		const node = $('.teaser__group-text').first();
		const parent = node.parent();
		return createPayload.createPayload({
			name: siteInfo.theEconomist.name, 
			link: parent.attr('href'), 
			url: siteInfo.theEconomist.url, 
			text: node.attr('title')
		});
	}
);
