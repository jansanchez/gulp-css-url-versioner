

# Gulp CSS Url Versioner [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Code Climate Status][codeclimate-image]][codeclimate-url]

> A gulp plugin for versioning the CSS property: url

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

Options are the same as has: [css-url-versioner](https://github.com/jansanchez/css-url-versioner#options)

#### variable:
Default: `v`

Here go the variable of our version, for '?myVariable=yyyymmdd'

```
{variable: 'myVariable'}
```

#### version:
Default: `yyyymmdd`

Here you go a custom version if you so desire, but if we do not put this key, then the default version will be the current date.

```
{version: '0.0.2'}
```

#### lastcommit: 
Default: `false`

If we want that version to be our short version of last commit in git, configured 'lastcommit' to true.

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

