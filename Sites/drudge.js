var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.drudge.url).then(
	$ => {
		const node = $('#app_mainheadline').find('a');
		return createPayload.createPayloadWithNode(siteInfo.drudge.name, siteInfo.drudge.url, node);
	}
);