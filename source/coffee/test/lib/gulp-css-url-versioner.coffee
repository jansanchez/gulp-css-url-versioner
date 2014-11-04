###
Test: cssUrl
###

gulp = require('gulp')
fs      = require('fs')
gulpCssVersioner = require('../../dist/package/index')
through = require('through2')

stream = null

data = fs.readFileSync('./test/css/test.css', 'utf8')



describe('GulpCssUrlVersioner', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Output', () ->

		stream = gulp.src(['../../test/css/test.css'])
			.pipe(gulpCssVersioner({
				content: data
			}))

		it('stream should be an javascript object.', () ->
			type = typeof stream
			type.should.be.equal("object")
			return
		)





		#stream.pipe(gulp.dest('../../test/css/versioned/'))

		return
	)


	return

)
