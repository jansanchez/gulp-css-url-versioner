

# Gulp CSS Url Versioner [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Code Climate Status][codeclimate-image]][codeclimate-url]

> A gulp plugin for versioning the CSS property: url.
> Based on: [css-url-versioner](https://github.com/jansanchez/css-url-versioner)

## Getting Started

### Install:

```
npm install --save-dev gulp-css-url-versioner
```

### How to use:

```
var gulp = require('gulp'),
    cssVersioner = require('gulp-css-url-versioner');

gulp.task('styles', function () {
    return gulp.src('src/css/withoutVersion.css')
    .pipe(cssVersioner())
    .pipe(gulp.dest('dist/css/withVersion.css'));
});
```

#### With Stylus and Git


```
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    cssVersioner = require('gulp-css-url-versioner');

gulp.task('stylus', function () {
    return gulp.src('src/styles/*.styl')
    	.pipe(stylus())
		.pipe(cssVersioner({lastcommit: true}))
		.pipe(gulp.dest('dist/styles/'));
});
```


#### Input
```
.fancybox-overlay {
  background: url(fancybox_overlay.png);
}
@font-face {
	font-family: "OpenSans";
	font-style: normal;
	font-weight: normal;
	src: url("os.eot");
	src: url("os.eot#iefix") format('embedded-opentype'), 
		 url("os.ttf") format('truetype'), 
		 url("os.woff") format('woff'), 
		 url("os.svg#OpenSans") format('svg');
}
```

#### Output
```
.fancybox-overlay {
  background: url(fancybox_overlay.png?v=6bfae27);
}
@font-face {
	font-family: "OpenSans";
	font-style: normal;
	font-weight: normal;
	src: url("os.eot?v=6bfae27");
	src: url("os.eot?v=6bfae27#iefix") format('embedded-opentype'), 
		 url("os.ttf?v=6bfae27") format('truetype'), 
		 url("os.woff?v=6bfae27") format('woff'), 
		 url("os.svg?v=6bfae27#OpenSans") format('svg');
}
```




### Options:


#### variable:
Default: `v`

You can customize the variable name in '?myVariable=yyyymmdd'

```
{variable: 'myVariable'}
```

#### version:
Default: `yyyymmdd`

By default the version is the current date. You can also customize it:

```
{version: '0.0.2'}
```

#### lastcommit: 
Default: `false`

Set to true if you want to use the short version of your last commit as your version.

```
{lastcommit: true}
```





[downloads-image]: http://img.shields.io/npm/dm/gulp-css-url-versioner.svg
[npm-url]: https://www.npmjs.org/package/gulp-css-url-versioner
[npm-image]: http://img.shields.io/npm/v/gulp-css-url-versioner.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-css-url-versioner
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-css-url-versioner.svg

[coveralls-url]: https://coveralls.io/r/jansanchez/gulp-css-url-versioner
[coveralls-image]: https://img.shields.io/coveralls/jansanchez/gulp-css-url-versioner.svg

[codeship-url]: https://www.codeship.io/projects/44868
[codeship-image]: https://codeship.io/projects/221e0440-44c9-0132-43bc-1e738e05cfd5/status?branch=master

[codeclimate-url]: https://codeclimate.com/github/jansanchez/gulp-css-url-versioner
[codeclimate-image]: https://codeclimate.com/github/jansanchez/gulp-css-url-versioner/badges/gpa.svg

