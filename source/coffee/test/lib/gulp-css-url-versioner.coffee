###
Test: cssUrl
###

fs      = require('fs')
gulpCssVersioner = require('../../dist/package/index')


mainInstance = null
d = new Date()
version = d.getFullYear().toString() + (d.getMonth()+1).toString() + d.getDate().toString()

data = fs.readFileSync('./test/css/test.css', 'utf8')



describe('GulpCssUrlVersioner', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Output', () ->
		mainInstance = gulpCssVersioner({
			content: data
		})

		it('mainInstance should be an javascript object.', () ->
			type = typeof mainInstance
			type.should.be.equal("object")
			return
		)
		return
	)


	return

)

