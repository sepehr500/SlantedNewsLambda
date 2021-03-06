var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.washPo.url).then(
	$ => {
		const node = $('div.headline').first().find('a');
		return createPayload({
			name: siteInfo.washPo.name, 
			node,
			link: node.attr('href'),
			url: siteInfo.washPo.url, 
		});
	}
);
