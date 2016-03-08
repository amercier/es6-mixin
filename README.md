es6-mixin
=========

Generic mixin superclass designed to be used with ES6 (ES2015) classes.

[![Latest Stable Version](https://img.shields.io/npm/v/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![License](https://img.shields.io/npm/l/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![Build Status](https://img.shields.io/travis/amercier/node-es6-mixin/master.svg)](https://travis-ci.org/amercier/node-es6-mixin)

[![Dependency Status](http://img.shields.io/gemnasium/amercier/node-es6-mixin.svg)](https://gemnasium.com/amercier/node-es6-mixin)
[![NPM Downloads](https://img.shields.io/npm/dm/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![Test Coverage](https://img.shields.io/codecov/c/github/amercier/node-es6-mixin/master.svg)](https://codecov.io/github/amercier/node-es6-mixin?branch=master)
[![API Documentation](https://doc.esdoc.org/github.com/amercier/node-es6-mixin/badge.svg)](https://doc.esdoc.org/github.com/amercier/node-es6-mixin/)
[![Code Climate](https://img.shields.io/codeclimate/github/amercier/node-es6-mixin.svg)](https://codeclimate.com/github/amercier/node-es6-mixin)

Installation
------------

    npm install --save es6-mixin

Usage
-----

### Create a new mixin

    import Mixin from 'es6-mixin';

    class Foo extends Mixin {
      foo() {
        return 'foo';
      }
    }

    class Bar {
      constructor() {
        Foo.mixin(this);
      }
    }

    new Bar().foo(); // => 'foo'

### Create a mixin from an exitsing ES6 class

    import Mixin from 'es6-mixin';

    class Foo {
      constructor(a, b, c) { ... }
      foo() {
        return 'foo';
      }
    }

    // Same with a "classic" ES5 prototype:
    //
    //   function Foo(a, b, c) { ... }
    //   Foo.prototype.foo = {
    //     return 'foo';
    //   }

    class Bar extends Mixin {
      static mixin(target = {}) {
        return Foo.mixin(target, Foo, 1, 2, 3); // 1, 2, 3 are passed to Foo's constructor
      }
    }

    class Baz {
      constructor() {
        Bar.mixin(this);
      }
    }

    new Baz().foo(); // => 'foo'
