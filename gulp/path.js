/*!!
 * 
 * gulp path
 * @author: Jan Sanchez
 *
 */

var Path = {};

Path.src = { folder: 'source/' };
Path.src.coffee = {};
Path.src.coffee.folder = Path.src.folder + 'coffee/'
Path.src.coffee.package = Path.src.coffee.folder + 'package/';
Path.src.coffee.test = Path.src.coffee.folder + 'test/';

Path.dest = {};
Path.dest.folder = '';
Path.dest.js = {};
Path.dest.js.package = Path.dest.folder + 'dist/';
Path.dest.js.test    = Path.dest.folder + 'test/';


/* Coffee Path */
Path.coffee = {
	default : {
		src: [
			Path.src.coffee.folder + '**/*.coffee',
			'!' + Path.src.coffee.folder + '_**/*.coffee',
			'!' + Path.src.coffee.folder + '**/_*.coffee'
		],
		dest: Path.dest.js.package
	},	
	package : {
		src: [
			Path.src.coffee.package + '**/*.coffee',
			'!' + Path.src.coffee.package + '_**/*.coffee',
			'!' + Path.src.coffee.package + '**/_*.coffee'
		],
		dest: Path.dest.js.package
	},
	test : {
		src: [
			Path.src.coffee.test + '**/*.coffee',
			'!' + Path.src.coffee.test + '_**/*.coffee',
			'!' + Path.src.coffee.test + '**/_*.coffee'
		],
		dest: Path.dest.js.test
	}

};


/* Javascript Path */
Path.javascript = {
	lint: [
		Path.dest.js.package + '**/*.js',
		Path.dest.js.test + '**/*.js'
	],
	complexity: [
		Path.dest.js.package + '**/*.js',
		Path.dest.js.test + '**/*.js'
	]
};


/* Clean Path */
Path.clean = {
	js: {
		package: [
			Path.dest.js.package + '**/*.*'
		],
		test: [
			Path.dest.js.test + '**/*.js',
			Path.dest.folder + 'dist/test/'
		]
	}
};


/* Copy Path */
Path.copy = {
	js: {
		test: {
			base: Path.dest.folder,
			src: [
				Path.dest.folder + 'dist/test/**/*.*'
			],
			dest: Path.dest.js.test
			
		}
	}
};


/* Mocha Path */
Path.mocha = {
	js: {
		test: ['test/**/*.js']
	}
};



/* Watch Paths */
Path.watch = {
	coffee: [Path.src.coffee.folder + '**/*.coffee']
};


module.exports = Path;

