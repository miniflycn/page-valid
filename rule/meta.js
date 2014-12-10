var Match = require('../match');

module.exports = function ($) {
  new Match($)
    .tag('meta')
    .attr('name', 'keywords', 'meta keywords必须存在')
    .attr('name', 'description', 'meta description必须存在'); 
}