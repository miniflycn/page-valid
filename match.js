var chalk = require('chalk');

function Match($) {
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
  attr: function (key, value, warning) {
    if (!warning) {
      warning = value;
      value = undefined;
    }
    var flag = false, self = this;
    this.target.each(function (i, ele) {
      ele = self.$(ele);
      if (value ? ele.attr(key) === value : ele.attr(key)) 
        return (flag = true);
    });
    if (!flag) console.log(chalk.red('* ' + warning));
    return this;
  },
  attrs: function (attrs, warning) {
    // TODO
    return this;
  }
}

module.exports = Match;