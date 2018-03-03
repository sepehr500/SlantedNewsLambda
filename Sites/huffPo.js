var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

// CNN loads in their data after page load. So this will not work.
module.exports = cheerioFetch(siteInfo.huffPo.url).then(
	$ => {
		const link = $('.bn-card-headline').first().attr('href');
		const title = $('.card__headline__text').first().text();
		return createPayload({
			name: siteInfo.huffPo.name, 
			link: link,
			url: siteInfo.huffPo.url, 
			text: title
		});
	}
);
