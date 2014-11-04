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

	@data = {}
	@settings = opts or {}
	@css = ''
	@transform()
	
	return @stream

GulpCssUrlVersioner::transform = ()->
	self = @
	
	@stream = new Transform({objectMode: true})
	@stream._transform = (chunk, encoding, callback) ->
		
		self.data.content = chunk.contents.toString()
		self.options = extend(self.settings, self.data)
		self.css = new CssUrlVersioner(self.options)
		chunk.contents = new Buffer(self.css.output, 'utf8')
		
		callback(null, chunk)
	return

###
# Expose library.
###

module.exports = GulpCssUrlVersioner
