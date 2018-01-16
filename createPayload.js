module.exports = function(name, url, element) {
	return {
		articleLink: url + element.attr('href'),
		articleTitle: element.text(),
		siteName: name,
		siteUrl: url
	};
};
