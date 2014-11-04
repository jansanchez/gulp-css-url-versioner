/*!!
 * 
 * gulpfile.js
 * @author: Jan Sanchez
 *
 */

var gulp = require('gulp'),
changelog = require('conventional-changelog'),
bump = require('gulp-bump'),
tagVersion = require('gulp-tag-version'),
filter = require('gulp-filter'),
fs = require('fs'),
loadPlugins = require('gulp-load-plugins'),
package = require('./package.json'),
notify = require("node-notifier"),
path = require('./gulp/path'),
options = require('./gulp/options');

var notifier = new notify(),
plugins = loadPlugins();

plugins.runSequence = require('run-sequence');

var coffeeTasks = ['js'];



/*!!
* 
* Tareas para changelog, tag
*
* tarea principal: gulp
*/


gulp.task('log', function () {
    return changelog({
        repository: package.repository.url,
        version: package.version
    }, function(err, log) {
        fs.writeFileSync('CHANGELOG.md', log, 'utf8');
    });
});

gulp.task('bump', function(){
    return gulp.src(['./package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'))
    .pipe(filter('package.json'))
    .pipe(tagVersion());
});

gulp.task('version', function (cb) {
    plugins.runSequence(['log', 'bump'], cb);
});

/*!!
* 
* Tareas individuales para limpiar los archivos generados
*
* tarea principal: gulp clean
*/

gulp.task('clean:js:package', function () {
    return gulp.src(path.clean.js.package, options.clean.general.src)
    .pipe(plugins.rimraf(options.clean.general.plugin));
});

gulp.task('clean:js:test', function () {
    return gulp.src(path.clean.js.test, options.clean.general.src)
    .pipe(plugins.rimraf(options.clean.general.plugin));
});

gulp.task('clean:js', function (cb) {
    return plugins.runSequence(['clean:js:package', 'clean:js:test'], cb);
});

gulp.task('clean', function (cb) {
    plugins.runSequence(['clean:js'], cb);
});


/*!!
* 
* Tareas para copiar archivos
*
* tarea principal: gulp copy
*/

gulp.task('copy:js:test', function () {
    gulp.src(path.copy.js.test.src, {
            base: path.copy.js.test.base
        })
        .pipe(gulp.dest(path.copy.js.test.dest));
});


/*!!
* 
* Tareas para generar, concatenar, lintear Javascript
*
* tarea principal: gulp js
*/

gulp.task('coffee', function() {
    return gulp.src(path.coffee.default.src)
    .pipe(plugins.coffee(options.coffee.general).on('error', function(err){
        console.log('');
        console.log(err.name + " in " + err.plugin);
        console.log('Message: ' + err.message);
        console.log('Stack: ' + err.stack);

        var isLinux = /^linux/.test(process.platform);
        if (isLinux){
            notifier.notify({
                title: 'Plugin: ' + err.plugin,
                message: err.name + ' in ' + err.plugin,
                contentImage: __dirname + "/gulp/img/logo.png",
                appIcon: __dirname + "/gulp/img/logo.png",
                open: "file://" + __dirname + "/gulp/img/logo.png"
            }, function(error, response) {
                console.log(response);
            });
        }

    }))
    .pipe(gulp.dest(path.coffee.default.dest));
});


gulp.task('lint', function() {
    return gulp.src(path.javascript.lint)
        .pipe(plugins.jshint(options.js.lint.jshintrc))
        .pipe(plugins.jshint.reporter(options.js.lint.reporterStyle))
        .pipe(plugins.jshint.reporter(options.js.lint.reporter));
});


gulp.task('complexity', function(){
    return gulp.src(path.javascript.complexity)
    .pipe(plugins.complexity({breakOnErrors: false}));
});


gulp.task('js', function(cb) {
    plugins.runSequence('clean:js', 'coffee', 'copy:js:test', 'clean:js:test', 'lint', 'complexity', cb);
});


gulp.task('watch', function () {

    gulp.watch(path.watch.coffee, coffeeTasks);
});


/*!!
* 
* Tareas por default
*
* tarea principal: gulp
*/

gulp.task('default', [], function (cb) {
    plugins.runSequence('js', cb);
});


gulp.task('test', function () {
    return gulp.src(path.mocha.js.test, {read: false})
    .pipe(plugins.mocha({
        reporter: 'spec',
        recursive: true,
        globals: {
            should: require('should'),
            assert: require('assert')
        }
    }
    ));
});

/*
* Task for test my package
*/



var gulpCssVersioner = require('./dist/package/index.js')

gulp.task('versioner', function () {
    return gulp.src(['test/css/test.css'])
            .pipe(gulpCssVersioner())
            .pipe(gulp.dest('test/css/versioned/'))
});

