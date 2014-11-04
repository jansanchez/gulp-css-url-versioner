###
GulpCssUrlVersioner
@class GulpCssUrlVersioner
@author Jan Sanchez
###

###
# Module dependencies.
###

util = require('util')
Transform = require('stream').Transform
Buffer = require('buffer').Buffer
extend = util._extend
CssUrlVersioner = require('css-url-versioner')

###
# Library.
###

GulpCssUrlVersioner = (opts) ->

	@stream = new Transform({objectMode: true})
	content = {}
	settings = opts or {}

	@stream._transform = (chunk, encoding, callback) ->

		content.content = chunk.contents.toString()
		@options = extend(settings, content)
		css = new CssUrlVersioner(@options)
		chunk.contents = new Buffer(css.output, 'utf8')

		callback(null, chunk)
	
	return @stream

###
# Expose library.
###

module.exports = GulpCssUrlVersioner
