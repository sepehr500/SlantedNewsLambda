var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.wsj.url).then(
	$ => {
		const node = $('.wsj-headline-link').first();
		return createPayload({
			name: siteInfo.wsj.name, 
			text: node.text(),
			link: node.attr('href'),
			url: siteInfo.wsj.url, 
		});
	}
);
