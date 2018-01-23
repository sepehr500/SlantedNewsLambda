var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.vox.url).then(
	$ => {
		const node = $('.c-entry-box--compact__title').first().find('a');
		return createPayload({
			name: siteInfo.vox.name, 
			node,
			link: node.attr('href'),
			url: siteInfo.vox.url, 
		});
	}
);
