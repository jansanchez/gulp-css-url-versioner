
/*
GulpCssUrlVersioner
@class GulpCssUrlVersioner
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Buffer, CssUrlVersioner, GulpCssUrlVersioner, Transform, extend, util;

util = require('util');

Transform = require('stream').Transform;

Buffer = require('buffer').Buffer;

extend = util._extend;

CssUrlVersioner = require('css-url-versioner');


/*
 * Library.
 */

GulpCssUrlVersioner = function(opts) {
  var content, settings;
  this.stream = new Transform({
    objectMode: true
  });
  content = {};
  settings = opts || {};
  this.stream._transform = function(chunk, encoding, callback) {
    var css;
    content.content = chunk.contents.toString();
    this.options = extend(settings, content);
    css = new CssUrlVersioner(this.options);
    chunk.contents = new Buffer(css.output, 'utf8');
    return callback(null, chunk);
  };
  return this.stream;
};


/*
 * Expose library.
 */

module.exports = GulpCssUrlVersioner;
