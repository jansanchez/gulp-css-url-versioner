

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

