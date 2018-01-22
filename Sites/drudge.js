var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.drudge.url).then(
	$ => {
		const node = $('#app_mainheadline').find('a');
		return createPayload({name: siteInfo.drudge.name, url: siteInfo.drudge.url, text: node.text(), link: node.attr('href')});
	}
);