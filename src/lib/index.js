import toPairs from 'lodash.topairs';

/**
 * Generic mixin superclass. This class is intended to be extended by actual
 * mixins as in:
 *
 * ### Without any superclass
 *
 *     class Foo extends Mixin {
 *       bar() {
 *         return 'baz';
 *       }
 *     }
 *
 *     class Norf extends SomeParentClass {
 *       constructor() {
 *         super(); // SomeParentClass
 *         Foo.mixin(this);
 *       }
 *     }
 *
 *     new Norf().bar(); // => 'baz'
 *     new Norf() instanceof SomeParentClass; // => true
 *     new Norf() instanceof Foo; // => false
 *
 * ### With a superclass (which is a mixin)
 *
 *     class Foo extends Mixin { ... }
 *
 *     class Foo2 extends Foo {
 *       bar2() {
 *         return 'baz2';
 *       }
 *     }
 *
 *     // Same usage as in without superclass
 *
 * ### With a superclass (which is not a mixin)
 *
 *     import Foo from 'foo';
 *
 *     class FooMixin extends Mixin {
 *       static mixin(target = {}) {
 *         return Mixin.mixin(target, Foo);
 *       }
 *     }
 *
 *     // Same usage as in without superclass
 */
export default class Mixin {

  /**
   * Mixes in this class's methods into an existing object.
   * @param {object} [target={}] Any object to mix this class's methods into
   * @param {object} [MixedIn=this] Constructor to be mixed in
   * @param {...*} [...args] Arguments to pass to the mixed in constructor, if any
   * @returns {this} The original target object, mutated
   */
  static mixin(target = {}, MixedIn = this, ...args) {
    const instance = new MixedIn(...args);

    // Get all the methods from this class, bind them to the instance, and copy
    // them to the target object.
    toPairs(MixedIn)
      .filter(([, method]) => typeof method === 'function')
      .forEach(([methodName, method]) => (target[methodName] = method.bind(instance)));

    return target;
  }
}
