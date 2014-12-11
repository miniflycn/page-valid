var chalk = require('chalk')
  , opts = {}
  , slice = [].slice;

function log(warning) {
  console.log(chalk.red('* ' + warning));
}

function _init(options) {
  options.onmsg && (log = options.onmsg);
  opts = options;
}

function _getRule(name, prefix) {
  return prefix + name.replace(/^./, function (c) {
    return c.toUpperCase();
  });
}

function _makeMethod(foo) {
  return function (rule) {
    if (
      opts[_getRule(rule, 'disable')] || 
        (opts.disableAll && !opts[_getRule(rule, 'enable')])
    ) return this;
    foo.apply(this, slice.call(arguments, 1));
    return this;
  }
}

function Match($) {
  if (!(this instanceof Match)) return _init($);
  this.$ = $;
  this.target = undefined;
  this.tagName = undefined;
}
Match.prototype = {
  constructor: Match,
  tag: function (tag) {
    this.target = this.$(tag);
    this.tagName = tag;
    return this;
  },
  attr: _makeMethod(function (key, value, msg) {
    if (!msg) {
      msg = value;
      value = undefined;
    }
    var flag = false, self = this;
    this.target.each(function (i, ele) {
      ele = self.$(ele);
      if (value ? ele.attr(key) === value : ele.attr(key)) 
        return (flag = true);
    });
    if (!flag) log(msg);
  }),
  attrs: _makeMethod(function (attrs, msg) {
    // TODO
  }),
  maxSize: _makeMethod(function (num, msg) {
    if (this.target.length > num) log(msg);
  })
}

module.exports = Match;