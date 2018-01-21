var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.DailyCaller.url).then(
	$ => {
		const node = $('#homepage-lead-truck > div > h2 > a');
		return createPayload(siteInfo.DailyCaller.name, siteInfo.DailyCaller.url, node, false, node.attr('title'));
	}
);