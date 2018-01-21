module.exports = function(name, url, element) {
	let returnObj = {};
	returnObj[name] = {
		articleLink: url + element.attr('href'),
		articleTitle: element.text(),
		siteUrl: url
	};
	return returnObj;
};
