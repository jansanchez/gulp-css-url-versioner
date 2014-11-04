
/*
Test: cssUrl
 */
var data, fs, gulp, gulpCssVersioner, stream, through;

gulp = require('gulp');

fs = require('fs');

gulpCssVersioner = require('../../dist/package/index');

through = require('through2');

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
  });
});
