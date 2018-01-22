var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.nyt.url).then(
	$ => {
		const node = $('.story-heading').first().find('a');
		return createPayload({name: siteInfo.nyt.name, url: siteInfo.nyt.url, node});
	}
);
