
/*
GulpCssUrlVersioner
@class GulpCssUrlVersioner
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Buffer, CssUrlVersioner, GulpCssUrlVersioner, chalk, extend, through, util;

util = require('util');

through = require('through2');

chalk = require('chalk');

Buffer = require('buffer').Buffer;

extend = util._extend;

CssUrlVersioner = require('css-url-versioner');


/*
 * Library.
 */

GulpCssUrlVersioner = function(opts) {
  this.data = {};
  this.settings = opts || {
    debug: false
  };
  this.css = '';
  this.transform();
  return this.stream;
};

GulpCssUrlVersioner.prototype.transform = function() {
  var self;
  self = this;
  this.stream = through.obj(function(chunk, encoding, callback) {
    var error;
    self.data.content = chunk.contents.toString();
    self.options = extend(self.settings, self.data);
    try {
      self.css = new CssUrlVersioner(self.options);
      chunk.contents = new Buffer(self.css.output, 'utf8');
      if (self.options.debug === true) {
        console.log(chalk.yellow(' + ' + chunk.relative));
      }
    } catch (_error) {
      error = _error;
      console.log(chalk.red(' - ' + chunk.relative + ' : ' + error.message));
    }
    callback(null, chunk);
  });
};


/*
 * Expose library.
 */

module.exports = GulpCssUrlVersioner;
