/*!!
 * 
 * gulp options
 * @author: Jan Sanchez
 *
 */

var path = require('./path'),
	d = new Date(),
	currentDate = '',
	Options = {};

currentDate = d.getDate().toString() + "-" + (d.getMonth()+1).toString() + "-" + d.getFullYear().toString() + "_" + d.getHours().toString();

/* Clean Options */
Options.clean = {
	general: {
		src: {read: false},
		plugin: {force: true}
	}
};


/* Coffee Options */
Options.coffee = {
	general: {bare: true}
};


/* Lint Options */
Options.js = {
	lint: {
		jshintrc: './gulp/.jshintrc',
		reporterStyle: 'jshint-stylish',
		reporter: 'fail'
	}
};


module.exports = Options;
