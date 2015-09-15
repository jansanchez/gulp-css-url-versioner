###
GulpCssUrlVersioner
@class GulpCssUrlVersioner
@author Jan Sanchez
###

###
# Module dependencies.
###

util = require('util')
through = require('through2')
chalk = require('chalk')
Buffer = require('buffer').Buffer
extend = util._extend
CssUrlVersioner = require('css-url-versioner')

###
# Library.
###

GulpCssUrlVersioner = (opts) ->
	@data = {}
	@settings = opts or { debug: false }
	@css = ''
	@transform()
	return @stream

GulpCssUrlVersioner::transform = ()->
	self = @
	@stream = through.obj( (chunk, encoding, callback) ->
		self.data.content = chunk.contents.toString()
		self.options = extend(self.settings, self.data)
		try
			self.css = new CssUrlVersioner(self.options)
			chunk.contents = new Buffer(self.css.output, 'utf8')
			if self.options.debug is true
				console.log(chalk.yellow(' + ' + chunk.relative))
		catch error
			console.log(chalk.red(' - ' + chunk.relative  + ' : ' + error.message))
		callback(null, chunk)
		return
	)
	return

###
# Expose library.
###

module.exports = GulpCssUrlVersioner
