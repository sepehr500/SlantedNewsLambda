var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.npr.url).then(
	$ => {
		const node = $('.title').first();
		const parent = node.parent()[0];
		return createPayload({name: siteInfo.npr.name,link: parent.attribs.href, url: siteInfo.npr.url, text: node.text()});
	}
);
