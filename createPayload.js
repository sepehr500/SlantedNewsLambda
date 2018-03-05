var R = require('ramda');

var siteInfo = require('./Config/siteInfo');

var configureUrl = R.curry((siteUrl, hasLink, link) => { return link.includes(siteUrl) || hasLink ? link : siteUrl + link;});

var formatArticleLink = (siteUrl, link) => {
	return (link.indexOf(siteUrl) >= 0 || link.indexOf('http') >= 0) ? link : `${siteUrl}${link}`;
};
module.exports = (obj) => {

	const findSlant = R.compose( (k) => siteInfo[k].slant ,R.find((k) => siteInfo[k].name === obj.name) ,R.keys);
	return R.tryCatch(R.compose(
		R.objOf(obj.name),
		R.evolve({articleLink: configureUrl(obj.url,obj.link)}),
		(obj) => {
			return {
				articleLink: formatArticleLink(obj.url, obj.link),
				articleTitle: obj.text ? obj.text : obj.node.text(),
				siteUrl: obj.url,
				slant: findSlant(siteInfo)
			};
		}
	),R.always({}))(obj);
};
