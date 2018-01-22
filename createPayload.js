var configureUrl = function(link, siteUrl) {
	return link.includes(siteUrl) ? link : `${siteUrl}${link}`;
};


module.exports = {
	createPayloadWithNode: function(name, url, element) {
		try {
			let returnObj = {};
			returnObj[name] = {
				articleLink: configureUrl(element.attr('href'), url),
				articleTitle: element.text(),
				siteUrl: url
			};
			return returnObj;
		} catch (error) {
			console.log(error);
			return {};
		}
	},
	createPayload: function(name, link, url, title) {
		try {
			let returnObj = {};
			returnObj[name] = {
				articleLink: configureUrl(link, url),
				articleTitle: title,
				siteUrl: url
			};
			return returnObj;
		} catch (error) {
			console.log(error);
			return {};
		}
	}
};
