/* eslint-disable no-empty-function */

import { expect } from 'chai';
import sinon, { spy } from 'sinon';
import { mixin, mix, Mixin } from '../../src/lib/index';
import getFixture from './fixture';
import { itExists, itIsAFunction } from './helpers';

/** @test {mixin} */
describe('mixin', () => {
  itExists(mixin);
  itIsAFunction(mixin);

  it('copies methods from the given constructor\'s prototype', () => {
    const { ExistingClass } = getFixture();
    const target = {};

    mixin(target, ExistingClass);
    expect(target).to.contain.all.keys(['init']);
  });

  it('calls the given constructor with the given parameters', () => {
    const { ExistingClass } = getFixture();
    const initSpy = spy(ExistingClass.prototype, 'init');
    const target = {};

    mixin(target, ExistingClass, 1, 2, 3);
    sinon.assert.calledWith(initSpy, 1, 2, 3);
  });
});

/** @test {mix} */
describe('mix', () => {
  itExists(mixin);
  itIsAFunction(mixin);

  it('creates a new class', () => {
    const { ExistingClass } = getFixture();
    const SubClass = mix(ExistingClass);
    expect(SubClass).to.be.a('function');
    expect(new SubClass()).to.be.an.instanceof(SubClass);
  });

  it('creates a class that extends the given superclass', () => {
    class Foo {
      foo() {}
    }
    const SubClass = mix(Foo);
    expect(new SubClass()).to.be.an.instanceof(Foo);
    expect(new SubClass().init).to.equal(Foo.prototype.init);
  });

  it('mixes in all given mixins', () => {
    class Foo {
      foo() {}
    }
    class Bar {
      bar() {}
    }
    class Baz {
      baz() {}
    }
    const SubClass = mix(Foo, Bar, Baz);
    expect(new SubClass()).not.to.have.key('foo');
    expect(new SubClass()).to.have.all.keys('bar', 'baz');
  });

  it('overwrite methods in the given order', () => {
    class Foo {
      foo() {
        return 'Foo';
      }
    }
    class FOo {
      foo() {
        return 'FOo';
      }
    }
    class FOO {
      foo() {
        return 'FOO';
      }
    }

    expect(new (mix(Foo, FOO))().foo()).to.equal('FOO');
    expect(new (mix(Foo, FOo, FOO))().foo()).to.equal('FOO');
  });
});

/** @test {Mixin} */
describe('Mixin', () => {
  itExists(Mixin);
  itIsAFunction(Mixin);

  /** @test {Mixin.mixin} */
  describe('mixin', () => {
    itExists(Mixin.mixin);
    itIsAFunction(Mixin.mixin);

    it('doesn\'t copy the constructor method', () => {
      const { SimpleMixin } = getFixture();
      const target = {};

      SimpleMixin.mixin(target);
      expect(target).not.to.contain.keys(['constructor']);
    });

    it('copies methods from the constructor\'s prototype to the given object', () => {
      const { SimpleMixin } = getFixture();
      const target = {};

      SimpleMixin.mixin(target);
      expect(target).to.contain.all.keys(['init']);
    });

    it('copies methods from the constructor\'s prototype to a new object'
      + ' when to target is provided', () => {
      const { SimpleMixin } = getFixture();

      const target = SimpleMixin.mixin();
      expect(target).to.contain.all.keys(['init']);
    });

    it('copies methods from an existing ES5 prototype', () => {
      const { PrototypeMixin } = getFixture();
      const target = {};

      PrototypeMixin.mixin(target);
      expect(target).to.contain.all.keys(['init']);
    });

    it('copies methods from an existing class', () => {
      const { ClassMixin } = getFixture();
      const target = {};

      ClassMixin.mixin(target);
      expect(target).to.contain.all.keys(['init']);
    });
  });
});
