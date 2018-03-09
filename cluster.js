var R = require('ramda');
var nlp = require('compromise');
var mimr = require('./bow');
var bow = mimr.bow;

const dataset = [
	[54,54],[1,1],[0,1],[1,0],
	[10,10],[10,13],[13,13],
	[55,55],[89,89],[57,55]
];



module.exports = function clusterData(obj) {

	// obj = {
	// 	a: {
	// 		articleTitle: 'dog jump hi'
	// 	},
	// 	c: {
	// 		articleTitle: 'cat crawl low'
	// 	},
	// 	b: {
	// 		articleTitle: 'dog jump hi'
	// 	},
	// 	d: {
	// 		articleTitle: 'cat crawl low'
	// 	}
	// };
	const cleanText =  (t) => {
		console.log(nlp(t.toLowerCase()).topics().not('#Possessive').out('root'));
		return nlp(t.toLowerCase()).topics().not('#Possessive').out('root');
	};

	const concatArray = R.reduce((acc, val ) => acc + ' ' + val, ' ');
	const k = R.keys(obj);
	const texts = R.compose( 
		concatArray,
		R.map(i => cleanText(obj[i].articleTitle))
	)(k);
	console.log(texts);
	var voc = mimr.dict(texts);
	const inp = R.map(i => bow( cleanText(obj[i].articleTitle), voc), k);
	var clustering = require('density-clustering');
	var dbscan = new clustering.DBSCAN();
	// parameters: 5 - neighborhood radius, 2 - number of points in neighborhood to form a cluster
	console.log(inp);
	var clusters = dbscan.run(inp, 1, 2);
	console.log(clusters, dbscan.noise);
	let objPairs = R.toPairs(obj);
	for (let x = 0; x < clusters.length; x++) {
		for (let y = 0; y < clusters[x].length; y++) {
			objPairs[clusters[x][y]][1].lab = x;
		}
	}
  
	dbscan.noise.forEach( i => {
		objPairs[i][1].lab = -1;
	});
  
	return R.fromPairs(objPairs);
};