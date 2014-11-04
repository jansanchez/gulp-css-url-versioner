
/*
Test: cssUrl
 */
var cssVersioner, d, data, fs, mainInstance, version;

fs = require('fs');

cssVersioner = require('../../dist/package/index');

mainInstance = null;

d = new Date();

version = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString();

data = fs.readFileSync('./test/css/test.css', 'utf8');

mainInstance = cssVersioner({
  content: data,
  variable: 'z'
});

describe('cssUrl', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Extend', function() {
    it('mainInstance.options.variable should be equal to "z".', function() {
      mainInstance.options.variable.should.be.equal('z');
    });
  });
  describe('Last commit', function() {
    var instance;
    instance = cssVersioner({
      content: data,
      lastcommit: true
    });
    it('instance.lastcommit should be equal to ' + true + '.', function() {
      instance.options.lastcommit.should.be.equal(true);
    });
  });
  describe('Default Version', function() {
    it('mainInstance.version should be equal to ' + version + '.', function() {
      mainInstance.version.should.be.equal(version);
    });
  });
  describe('Custom Version', function() {
    var instance;
    instance = cssVersioner({
      content: data,
      version: 'myVersion'
    });
    it('instance.version should be equal to "myVersion".', function() {
      instance.version.should.be.equal("myVersion");
    });
  });
  describe('Query String', function() {
    var queryString;
    queryString = '?z=' + version;
    it('mainInstance.queryString should be equal to ' + queryString + '.', function() {
      mainInstance.queryString.should.be.equal(queryString);
    });
  });
  describe('Generated versions', function() {
    var queryString, withDoubleQuotes, withSingleQuotes, withoutQuotes;
    queryString = '?v=' + version;
    withoutQuotes = ['url(sprite.png)', 'url(sprite.png' + queryString + ')', 'url(fonts/new.eot#ie)', 'url(fonts/new.eot' + queryString + '#ie)', 'url(img/abc.dfg.png)', 'url(img/abc.dfg.png' + queryString + ')', 'url(img/klm.nop.png#slug)', 'url(img/klm.nop.png' + queryString + '#slug)'];
    describe('Without quotes:', function() {
      describe(withoutQuotes[0], function() {
        var instance;
        instance = cssVersioner({
          content: withoutQuotes[0]
        });
        it(withoutQuotes[0] + ' should be convert to: ' + withoutQuotes[1] + '.', function() {
          instance.output.should.be.equal(withoutQuotes[1]);
        });
      });
      describe(withoutQuotes[2], function() {
        var instance;
        instance = cssVersioner({
          content: withoutQuotes[2]
        });
        it(withoutQuotes[2] + ' should be convert to: ' + withoutQuotes[3] + '.', function() {
          instance.output.should.be.equal(withoutQuotes[3]);
        });
      });
      describe(withoutQuotes[4], function() {
        var instance;
        instance = cssVersioner({
          content: withoutQuotes[4]
        });
        it(withoutQuotes[4] + ' should be convert to: ' + withoutQuotes[5] + '.', function() {
          instance.output.should.be.equal(withoutQuotes[5]);
        });
      });
      describe(withoutQuotes[6], function() {
        var instance;
        instance = cssVersioner({
          content: withoutQuotes[6]
        });
        it(withoutQuotes[6] + ' should be convert to: ' + withoutQuotes[7] + '.', function() {
          instance.output.should.be.equal(withoutQuotes[7]);
        });
      });
    });
    withSingleQuotes = ["url('sprite.png')", "url('sprite.png" + queryString + "')", "url('fonts/new.eot#ie')", "url('fonts/new.eot" + queryString + "#ie')", "url('img/abc.dfg.png')", "url('img/abc.dfg.png" + queryString + "')", "url('img/klm.nop.png#slug')", "url('img/klm.nop.png" + queryString + "#slug')"];
    describe("With single quotes: '", function() {
      describe(withSingleQuotes[0], function() {
        var instance;
        instance = cssVersioner({
          content: withSingleQuotes[0]
        });
        it(withSingleQuotes[0] + ' should be convert to: ' + withSingleQuotes[1] + '.', function() {
          instance.output.should.be.equal(withSingleQuotes[1]);
        });
      });
      describe(withSingleQuotes[2], function() {
        var instance;
        instance = cssVersioner({
          content: withSingleQuotes[2]
        });
        it(withSingleQuotes[2] + ' should be convert to: ' + withSingleQuotes[3] + '.', function() {
          instance.output.should.be.equal(withSingleQuotes[3]);
        });
      });
      describe(withSingleQuotes[4], function() {
        var instance;
        instance = cssVersioner({
          content: withSingleQuotes[4]
        });
        it(withSingleQuotes[4] + ' should be convert to: ' + withSingleQuotes[5] + '.', function() {
          instance.output.should.be.equal(withSingleQuotes[5]);
        });
      });
      describe(withSingleQuotes[6], function() {
        var instance;
        instance = cssVersioner({
          content: withSingleQuotes[6]
        });
        it(withSingleQuotes[6] + ' should be convert to: ' + withSingleQuotes[7] + '.', function() {
          instance.output.should.be.equal(withSingleQuotes[7]);
        });
      });
    });
    withDoubleQuotes = ['url("sprite.png")', 'url("sprite.png' + queryString + '")', 'url("fonts/new.eot#ie")', 'url("fonts/new.eot' + queryString + '#ie")', 'url("img/abc.dfg.png")', 'url("img/abc.dfg.png' + queryString + '")', 'url("img/klm.nop.png#slug")', 'url("img/klm.nop.png' + queryString + '#slug")'];
    describe('With double quotes: "', function() {
      describe(withDoubleQuotes[0], function() {
        var instance;
        instance = cssVersioner({
          content: withDoubleQuotes[0]
        });
        it(withDoubleQuotes[0] + ' should be convert to: ' + withDoubleQuotes[1] + '.', function() {
          instance.output.should.be.equal(withDoubleQuotes[1]);
        });
      });
      describe(withDoubleQuotes[2], function() {
        var instance;
        instance = cssVersioner({
          content: withDoubleQuotes[2]
        });
        it(withDoubleQuotes[2] + ' should be convert to: ' + withDoubleQuotes[3] + '.', function() {
          instance.output.should.be.equal(withDoubleQuotes[3]);
        });
      });
      describe(withDoubleQuotes[4], function() {
        var instance;
        instance = cssVersioner({
          content: withDoubleQuotes[4]
        });
        it(withDoubleQuotes[4] + ' should be convert to: ' + withDoubleQuotes[5] + '.', function() {
          instance.output.should.be.equal(withDoubleQuotes[5]);
        });
      });
      describe(withDoubleQuotes[6], function() {
        var instance;
        instance = cssVersioner({
          content: withDoubleQuotes[6]
        });
        it(withDoubleQuotes[6] + ' should be convert to: ' + withDoubleQuotes[7] + '.', function() {
          instance.output.should.be.equal(withDoubleQuotes[7]);
        });
      });
    });
  });
});
