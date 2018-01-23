var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theHill.url).then(
	$ => {
		const node = $('.top-story-headline').find('a');
		return createPayload({
			name: siteInfo.theHill.name, 
			link: node.attr('href'), 
			url: siteInfo.theHill.url, 
			text: node.attr('title')
		});
	}
);
