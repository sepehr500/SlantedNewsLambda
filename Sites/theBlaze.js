var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.theBlaze.url).then(
	$ => {
		const blazeLink = $('.link-inverse').first().attr('href');
		const blazeText = $('.display-text').find('span').first().text();
		return createPayload({
			name: siteInfo.theBlaze.name, 
			link: blazeLink,
			url: siteInfo.theBlaze.url,
			text: blazeText
		});
	}
);