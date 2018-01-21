var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.npr.url).then(
	$ => {
		const node = $('.title').first();
		const parent = node.parent()[0];
		return createPayload.createPayload(siteInfo.npr.name, parent.attribs.href, siteInfo.npr.url, node.text());
	}
);
