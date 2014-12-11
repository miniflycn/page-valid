var dom = require('url-dom')
  , head = require('./rule/head');

function Check(url, options) {
  this.url = url;
  this.options = options;
  this.dom = undefined;
  this.onDone = undefined;
  this._init(url);
}
Check.prototype = {
  constructor: Check,
  _init: function (url) {
    var self = this;
    require('./match')(this.options);
    var start = new Date;
    dom(url).on('done', function ($) {
      head($);
      self.onDone();
    }).on('fail', function (why) {
      console.error(why);
    });
  },
  done: function (cb) {
    this.onDone = cb;
  }
}

module.exports = Check;