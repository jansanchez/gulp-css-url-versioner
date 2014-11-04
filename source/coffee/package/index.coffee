###
index
@class index
@author Jan Sanchez
###

###
# Module dependencies.
###

GulpCssUrlVersioner = require('./lib/gulp-css-url-versioner')

###
# Expose library.
###

module.exports = (options) ->
	gulpCssUrlVersioner = new GulpCssUrlVersioner(options)
	gulpCssUrlVersioner
