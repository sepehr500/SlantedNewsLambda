var configureUrl = function(link, siteUrl) {
	return (link.indexOf(siteUrl) >= 0) ? link : `${siteUrl}${link}`;
};

module.exports = {
	createPayloadWithNode: function(name, url, element) {
		let returnObj = {};
		returnObj[name] = {
			articleLink: configureUrl(element.attr('href'), url),
			articleTitle: element.text(),
			siteUrl: url
		};
		return returnObj;
	},
	createPayload: function(name, link, url, title) {
		let returnObj = {};
		returnObj[name] = {
			articleLink: configureUrl(link, url),
			articleTitle: title,
			siteUrl: url
		};
		return returnObj;
	}
};
