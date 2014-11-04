
/*
Test: cssUrl
 */
var d, data, fs, gulpCssVersioner, mainInstance, version;

fs = require('fs');

gulpCssVersioner = require('../../dist/package/index');

mainInstance = null;

d = new Date();

version = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString();

data = fs.readFileSync('./test/css/test.css', 'utf8');

describe('GulpCssUrlVersioner', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Output', function() {
    mainInstance = gulpCssVersioner({
      content: data
    });
    it('mainInstance should be an javascript object.', function() {
      var type;
      type = typeof mainInstance;
      type.should.be.equal("object");
    });
  });
});
