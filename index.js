var dom = require('url-dom')
  , meta = require('./rule/meta');

function Check(url) {
  this.url = url;
  this.dom = undefined;
  this._init(url);
}
Check.prototype = {
  constructor: Check,
  _init: function (url) {
    dom(url).on('done', function ($) {
      meta($);
    }).on('fail', function (why) {
      console.error(why);
    });
  }
}

module.exports = Check;