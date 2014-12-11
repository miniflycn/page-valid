var Match = require('Match');

module.exports = function ($) {
  new Match($)
    .tag('a')
    .maxSize('aMaxSize', 100, '链接数不应当大于100')
    .attr('aHref', 'href', 'a标签href不应当为空');
};