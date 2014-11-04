
/*
Test: cssUrl
 */
var data, fs, gulp, gulpCssVersioner, stream;

gulp = require('gulp');

fs = require('fs');

gulpCssVersioner = require('../../dist/package/index');

stream = null;

data = fs.readFileSync('./test/css/test.css', 'utf8');

describe('GulpCssUrlVersioner', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Output', function() {
    stream = gulp.src(['../../test/css/test.css']).pipe(gulpCssVersioner({
      content: data
    }));
    it('stream should be an javascript object.', function() {
      var type;
      type = typeof stream;
      type.should.be.equal("object");
    });
    it('should be a readable stream.', function() {
      stream.readable.should.be.equal(true);
    });
    it('should be a writable stream.', function() {
      stream.writable.should.be.equal(true);
    });
  });
});
