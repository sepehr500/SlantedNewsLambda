


module.exports = function(siteName, siteUrl, elem){
  let obj = {};
  const info = {link: siteUrl + elem.attr('href'), title: elem.text() }
  obj[siteName] = info;
  return obj;
}