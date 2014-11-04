
/*
index
@class index
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var GulpCssUrlVersioner;

GulpCssUrlVersioner = require('./lib/gulp-css-url-versioner');


/*
 * Expose library.
 */

module.exports = function(options) {
  var gulpCssUrlVersioner;
  gulpCssUrlVersioner = new GulpCssUrlVersioner(options);
  return gulpCssUrlVersioner;
};
