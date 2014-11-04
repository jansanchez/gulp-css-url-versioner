
/*
GulpCssUrlVersioner
@class GulpCssUrlVersioner
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Buffer, CssUrlVersioner, GulpCssUrlVersioner, extend, through, util;

util = require('util');

through = require('through2');

Buffer = require('buffer').Buffer;

extend = util._extend;

CssUrlVersioner = require('css-url-versioner');


/*
 * Library.
 */

GulpCssUrlVersioner = function(opts) {
  this.data = {};
  this.settings = opts || {};
  this.css = '';
  this.transform();
  return this.stream;
};

GulpCssUrlVersioner.prototype.transform = function() {
  var self;
  self = this;
  this.stream = through.obj(function(chunk, encoding, callback) {
    self.data.content = chunk.contents.toString();
    self.options = extend(self.settings, self.data);
    self.css = new CssUrlVersioner(self.options);
    chunk.contents = new Buffer(self.css.output, 'utf8');
    return callback(null, chunk);
  });
};


/*
 * Expose library.
 */

module.exports = GulpCssUrlVersioner;
