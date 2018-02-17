var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

// CNN loads in their data after page load. So this will not work.
module.exports = cheerioFetch(siteInfo.cnn.url).then(
	$ => {
		const link = $('.link-banner');
		const title = $('.banner-text');
		return createPayload({
			name: siteInfo.cnn.name, 
			link: link,
			url: siteInfo.cnn.url, 
			text: title
		});
	}
);
