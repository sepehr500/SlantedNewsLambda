var cheerioFetch = require('fetch-cheerio-object');
var createPayload = require('../createPayload');
var siteInfo = require('../Config/siteInfo');

module.exports = cheerioFetch(siteInfo.Drudge.url).then(
	$ => {
		const node = $('#app_mainheadline').find('a');
		return createPayload(siteInfo.Drudge.name, siteInfo.Drudge.url, node , false);
	}
);