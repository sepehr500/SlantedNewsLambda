var R = require('ramda');

var configureUrl = R.curry((siteUrl, hasLink, link) => { return link.includes(siteUrl) || hasLink ? link : siteUrl + link;});

module.exports = (obj) => {
	return R.tryCatch(R.compose(
									R.objOf(obj.name),
									R.evolve({articleLink: configureUrl(obj.url,obj.link)}),
									(obj) => {
										return {
											articleLink: obj.link ? obj.link : obj.node.attr('href'),
											articleTitle: obj.text ? obj.text : obj.node.text(),
											siteUrl: obj.url
										};
									}
								),R.always({}))(obj) ;
};

