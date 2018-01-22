var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.dailyCaller.url).then(
	$ => {
		const node = $('#homepage-lead-truck > div > h2 > a');
		return createPayload({name: siteInfo.dailyCaller.name, node: node, url: siteInfo.dailyCaller.url, text: node.attr('title')});
	}
);