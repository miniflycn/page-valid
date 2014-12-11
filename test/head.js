var connect = require('connect')
  , serveStatic = require('serve-static')
  , Check = require('../');

connect()
  .use(serveStatic(__dirname + '/static'))
  .listen(3000);

function _throw(msg) {
  throw new Error(msg)
}

describe('head', function () {
  it('should able to check meta keywords', function (cb) {
    new Check('http://localhost:3000/bodyKeywords.html', {
      disableAll: true,
      enableMetaKeywords: true,
      onmsg: function (msg) {
        msg.should.equal('meta keywords必须存在');
      }
    }).done(cb);
  });

  it('should able to pass meta keywords', function (cb) {
    new Check('http://localhost:3000/metaKeywords.html', {
      disableAll: true,
      enableMetaKeywords: true,
      onmsg: _throw
    }).done(cb);
  });

  it('should able to check meta description', function (cb) {
    new Check('http://localhost:3000/bodyDescription.html', {
      disableAll: true,
      disableMetaDescription: true,
      onmsg: function (msg) {
        msg.should.equal('meta description必须存在');
      }
    }).done(cb);
  });

  it('should able to pass meta description', function (cb) {
    new Check('http://localhost:3000/metaDescription.html', {
      disableAll: true,
      enableMetaDescription: true,
      onmsg: _throw
    }).done(cb);
  });

  it('should able to check <link rel=\"canonical\">', function (cb) {
    new Check('http://localhost:3000/relCanonical.html', {
      disableAll: true,
      disableRelCanonical: true,
      onmsg: function (msg) {
        msg.should.equal('应当包含<link rel=\"canonical\">');
      }
    }).done(cb);
  });

  it('should able to pass <link rel=\"canonical\">', function (cb) {
    new Check('http://localhost:3000/blank.html', {
      disableAll: true,
      disableRelCanonical: true,
      onmsg: _throw
    }).done(cb);
  });
});