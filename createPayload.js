var R = require('ramda');

var configureUrl = R.curry((siteUrl, link) => link.includes(siteUrl) ? link : siteUrl + link);

module.exports = (obj) => {
	return R.tryCatch(R.compose(
									R.objOf(obj.name),
									R.evolve({articleLink: configureUrl(obj.url)}),
									(obj) => {
										return {
											articleLink: obj.node.attr('href'),
											articleTitle: obj.text ? obj.text : obj.node.text(),
											siteUrl: obj.url
										};
									}
								),R.always({}))(obj) ;

};

// EASIER TO UNDERESTAND
module.exports = (obj) => {
	return R.tryCatch(R.compose(
									(x) => R.objOf(obj.name, x),
									(x) => R.evolve({articleLink: configureUrl(obj.url)}, x),
									(x) => {
										return {
											articleLink: x.node.attr('href'),
											articleTitle: x.text ? x.text : x.node.text(),
											siteUrl: x.url
										};
									}
								),R.always({}))(obj) ;

};

// EVEN EASIER TO UNDERESTAND
module.exports = (obj) => {
	var intoObj = {
		articleLink: obj.node.attr('href'),
		articleTitle: obj.text ? obj.text : obj.node.text(),
		siteUrl: obj.url
	};
	var objWithUrlConfigured = R.evolve({articleLink: configureUrl(obj.url)}, intoObj);
	return R.objOf(obj.name, objWithUrlConfigured);

};



// module.exports = {
// 	createPayloadWithNode: function(name, url, element) {
// 		try {
// 			let returnObj = {};
// 			returnObj[name] = {
// 				articleLink: configureUrl(element.attr('href'), url),
// 				articleTitle: element.text(),
// 				siteUrl: url
// 			};
// 			return returnObj;
// 		} catch (error) {
// 			console.log(error);
// 			return {};
// 		}
// 	},
// 	createPayload: function(name, link, url, title) {
// 		try {
// 			let returnObj = {};
// 			returnObj[name] = {
// 				articleLink: configureUrl(link, url),
// 				articleTitle: title,
// 				siteUrl: url
// 			};
// 			return returnObj;
// 		} catch (error) {
// 			console.log(error);
// 			return {};
// 		}
// 	}
// };
