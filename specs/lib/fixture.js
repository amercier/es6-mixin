import { Mixin } from '../../src/lib/index';

/**
 * [getFixture description]
 * @return {{SimpleMixin: function, PrototypeMixin: function, ClassMixin: function}}
 *   Fixture mixins
 */
export function getFixture() {
  /**
   * A mixin
   */
  class SimpleMixin extends Mixin {
    constructor(...args) {
      super();
      this.init(...args);
    }
    init() {}
  }
  SimpleMixin.prototype.uselessProperty = true;

  /**
   * An existing ES5-style prototype
   */
  function ExistingPrototype(...args) {
    this.init(...args);
  }
  ExistingPrototype.prototype.init = function init() {};

  /**
   * A mixin mixing-in an existing ES5 prototype
   */
  class PrototypeMixin extends Mixin {
    static mixin(target = {}) {
      return super.mixin(target, ExistingPrototype);
    }
  }

  /**
   * An existing class
   */
  class ExistingClass {
    constructor(...args) {
      this.init(...args);
    }
    init() {}
  }

  /**
   * A mixin mixing-in an existing ES6 class
   */
  class ClassMixin extends Mixin {
    static mixin(target = {}) {
      return super.mixin(target, ExistingClass);
    }
  }

  return {
    SimpleMixin,
    PrototypeMixin,
    ExistingClass,
    ClassMixin,
  };
}
