import { expect } from 'chai';
import sinon, { spy } from 'sinon';
import { mixin, Mixin } from '../../src/lib/index';
import { getFixture } from './fixture';
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
