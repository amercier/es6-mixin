/**
 * Converts an object to an array of pairs, in the form of an array of tuples
 * where index 0 is the key and index 1 is the value. This include both
 * enumerable and non-enumerable properties.
 * @param {object} object Object for which to get pairs
 * @returns {[string, *][]} Array containing object pairs
 */
function entries(object) {
  return Object.getOwnPropertyNames(object).map(key => [key, object[key]]);
}

/**
 * Generic mixin superclass. This class is intended to be extended by actual
 * mixins.
 */
export class Mixin {

  /**
   * Mixes in this class's methods into an existing object.
   * @param {object} [target={}] Any object to mix this class's methods into
   * @param {function} [MixedIn=this] Constructor to be mixed in
   * @param {...*} [args] Arguments to pass to the mixed in constructor, if any
   * @return {object} The original target object, mutated
   */
  static mixin(target = {}, MixedIn = this, ...args) {
    const instance = new MixedIn(...args);

    // Get all the methods from this class, bind them to the instance, and copy
    // them to the target object.
    entries(MixedIn.prototype)
      .filter(([methodName, method]) =>
        typeof method === 'function' && methodName !== 'constructor')
      .forEach(([methodName, method]) => (target[methodName] = method.bind(instance)));

    return target;
  }
}

/**
 * Mixes in this class's methods into an existing object.
 * @param {object} [target={}] Any object to mix this class's methods into
 * @param {function} [MixedIn=Mixin] Constructor to be mixed in
 * @param {...*} [args] Arguments to pass to the mixed in constructor, if any
 * @return {object} The original target object, mutated
 */
export function mixin(target = {}, MixedIn = Mixin, ...args) {
  return Mixin.mixin(target, MixedIn, ...args);
}

/**
 * Create a subclass of a constructor and mix 1 or many mixin into it.
 * @param {function} SuperClass Class that will be used as super-class
 * @param {...function} mixins Mixins to add
 * @return {function} A new anonymous class that extends `SuperClass` and has all `mixins` mixed in
 */
export function mix(SuperClass, ...mixins) {
  return class extends SuperClass {
    constructor(...args) {
      super(...args);
      mixins.forEach(Mixedin => mixin(this, Mixedin));
    }
  };
}
