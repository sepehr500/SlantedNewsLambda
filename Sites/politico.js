var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.politico.url).then(
	$ => {
		const node = $('.lead .summary').find('a').first();
		return createPayload({
			name: siteInfo.politico.name, 
			text: node.text(),
			link: node.attr('href'),
			url: siteInfo.politico.url, 
		});
	}
);
