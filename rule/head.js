var Match = require('../match');

module.exports = function ($) {
  new Match($)
    .tag('head > meta')
    .attr('metaKeywords', 'name', 'keywords', 'meta keywords必须存在')
    .attr('metaDescription', 'name', 'description', 'meta description必须存在');

  new Match($)
    .tag('head > link')
    .attr('relCanonical', 'rel', 'canonical', '应当包含<link rel=\"canonical\">');
}