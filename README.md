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

### Basic usage

```javascript
import { mixin } from 'es6-mixin';

class Foo {
  foo() {
    return 'foo';
  }
}

class Bar {
  constructor() {
    mixin(this, Foo);
  }
}

new Bar().foo(); // => 'foo'
```

### Pass parameters to a constructor

```javascript
import { mixin } from 'es6-mixin';

class Foo {
  constructor(a, b, c) { ... }

  foo() {
    return 'foo';
  }
}

class Bar {
  constructor() {
    mixin(this, Foo, 1, 2, 3); // 1, 2, 3 are passed to Foo's constructor
  }
}

new Bar().foo(); // => 'foo'
```

### Use with ES5-style prototypes

```javascript
import { mixin } from 'es6-mixin';

function Foo() {
}

Foo.prototype.foo = function() {
  return 'foo';
};

class Bar {
  constructor() {
    mixin(this, Foo);
  }
}

new Bar().foo(); // => 'foo'
```

### Use the `Mixin` superclass

```javascript
import { mixin } from 'es6-mixin';

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
```
