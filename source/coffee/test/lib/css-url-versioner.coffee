###
Test: cssUrl
###

#mocha = require('mocha')
fs      = require('fs')
cssVersioner = require('../../dist/package/index')
#should = require('should')

mainInstance = null
d = new Date()
version = d.getFullYear().toString() + (d.getMonth()+1).toString() + d.getDate().toString()

data = fs.readFileSync('./test/css/test.css', 'utf8')

mainInstance = cssVersioner({
	content: data,
	variable: 'z'
})

describe('cssUrl', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Extend', () ->
		it('mainInstance.options.variable should be equal to "z".', () ->
			mainInstance.options.variable.should.be.equal('z')
			return
		)
		return
	)

	describe('Last commit', () ->
		instance = cssVersioner({
			content: data,
			lastcommit: true
		})
		
		it('instance.lastcommit should be equal to ' + true + '.', () ->
			instance.options.lastcommit.should.be.equal(true)
			return
		)
		return
	)	

	describe('Default Version', () ->
		it('mainInstance.version should be equal to ' + version + '.', () ->
			mainInstance.version.should.be.equal(version)
			return
		)
		return
	)

	describe('Custom Version', () ->
		instance = cssVersioner({
			content: data,
			version: 'myVersion'
		})
		it('instance.version should be equal to "myVersion".', () ->
			instance.version.should.be.equal("myVersion")
			return
		)
		return
	)

	describe('Query String', () ->
		
		queryString = '?z=' + version

		it('mainInstance.queryString should be equal to ' + queryString + '.', () ->
			mainInstance.queryString.should.be.equal(queryString)
			return
		)
		return
	)
	

	describe('Generated versions', () ->

		queryString = '?v=' + version

		withoutQuotes = ['url(sprite.png)', 'url(sprite.png' + queryString + ')',
						 'url(fonts/new.eot#ie)', 'url(fonts/new.eot' + queryString + '#ie)',
						 'url(img/abc.dfg.png)', 'url(img/abc.dfg.png' + queryString + ')',
						 'url(img/klm.nop.png#slug)', 'url(img/klm.nop.png' + queryString + '#slug)']
		
		describe('Without quotes:', () ->

			describe(withoutQuotes[0], () ->

				instance = cssVersioner({
					content: withoutQuotes[0]
				})

				it(withoutQuotes[0] + ' should be convert to: ' + withoutQuotes[1] + '.', () ->
					instance.output.should.be.equal(withoutQuotes[1])
					return
				)
				return
			)

			describe(withoutQuotes[2], () ->

				instance = cssVersioner({
					content: withoutQuotes[2]
				})

				it(withoutQuotes[2] + ' should be convert to: ' + withoutQuotes[3] + '.', () ->
					instance.output.should.be.equal(withoutQuotes[3])
					return
				)
				return
			)

			describe(withoutQuotes[4], () ->

				instance = cssVersioner({
					content: withoutQuotes[4]
				})

				it(withoutQuotes[4] + ' should be convert to: ' + withoutQuotes[5] + '.', () ->
					instance.output.should.be.equal(withoutQuotes[5])
					return
				)
				return
			)

			describe(withoutQuotes[6], () ->

				instance = cssVersioner({
					content: withoutQuotes[6]
				})

				it(withoutQuotes[6] + ' should be convert to: ' + withoutQuotes[7] + '.', () ->
					instance.output.should.be.equal(withoutQuotes[7])
					return
				)
				return
			)

			return
		)

		withSingleQuotes = ["url('sprite.png')", "url('sprite.png" + queryString + "')",
							"url('fonts/new.eot#ie')", "url('fonts/new.eot" + queryString + "#ie')",
							"url('img/abc.dfg.png')", "url('img/abc.dfg.png" + queryString + "')",
							"url('img/klm.nop.png#slug')", "url('img/klm.nop.png" + queryString + "#slug')"]
		
		describe("With single quotes: '", () ->

			describe(withSingleQuotes[0], () ->

				instance = cssVersioner({
					content: withSingleQuotes[0]
				})

				it(withSingleQuotes[0] + ' should be convert to: ' + withSingleQuotes[1] + '.', () ->
					instance.output.should.be.equal(withSingleQuotes[1])
					return
				)
				return
			)

			describe(withSingleQuotes[2], () ->

				instance = cssVersioner({
					content: withSingleQuotes[2]
				})

				it(withSingleQuotes[2] + ' should be convert to: ' + withSingleQuotes[3] + '.', () ->
					instance.output.should.be.equal(withSingleQuotes[3])
					return
				)
				return
			)

			describe(withSingleQuotes[4], () ->

				instance = cssVersioner({
					content: withSingleQuotes[4]
				})

				it(withSingleQuotes[4] + ' should be convert to: ' + withSingleQuotes[5] + '.', () ->
					instance.output.should.be.equal(withSingleQuotes[5])
					return
				)
				return
			)

			describe(withSingleQuotes[6], () ->

				instance = cssVersioner({
					content: withSingleQuotes[6]
				})

				it(withSingleQuotes[6] + ' should be convert to: ' + withSingleQuotes[7] + '.', () ->
					instance.output.should.be.equal(withSingleQuotes[7])
					return
				)
				return
			)

			return
		)

		withDoubleQuotes = ['url("sprite.png")', 'url("sprite.png' + queryString + '")',
							'url("fonts/new.eot#ie")', 'url("fonts/new.eot' + queryString + '#ie")',
							'url("img/abc.dfg.png")', 'url("img/abc.dfg.png' + queryString + '")',
							'url("img/klm.nop.png#slug")', 'url("img/klm.nop.png' + queryString + '#slug")']
		
		
		describe('With double quotes: "', () ->

			describe(withDoubleQuotes[0], () ->

				instance = cssVersioner({
					content: withDoubleQuotes[0]
				})

				it(withDoubleQuotes[0] + ' should be convert to: ' + withDoubleQuotes[1] + '.', () ->
					instance.output.should.be.equal(withDoubleQuotes[1])
					return
				)
				return
			)

			describe(withDoubleQuotes[2], () ->

				instance = cssVersioner({
					content: withDoubleQuotes[2]
				})

				it(withDoubleQuotes[2] + ' should be convert to: ' + withDoubleQuotes[3] + '.', () ->
					instance.output.should.be.equal(withDoubleQuotes[3])
					return
				)
				return
			)

			describe(withDoubleQuotes[4], () ->

				instance = cssVersioner({
					content: withDoubleQuotes[4]
				})

				it(withDoubleQuotes[4] + ' should be convert to: ' + withDoubleQuotes[5] + '.', () ->
					instance.output.should.be.equal(withDoubleQuotes[5])
					return
				)
				return
			)

			describe(withDoubleQuotes[6], () ->

				instance = cssVersioner({
					content: withDoubleQuotes[6]
				})

				it(withDoubleQuotes[6] + ' should be convert to: ' + withDoubleQuotes[7] + '.', () ->
					instance.output.should.be.equal(withDoubleQuotes[7])
					return
				)
				return
			)

			return
		)


		return
	)

	return

)

