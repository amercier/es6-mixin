import { expect } from 'chai';

/**
 * Checks whether something exists
 * @param {*} thing Anything
 */
export function itExists(thing) {
  it('exists', () => {
    expect(thing).to.exist;
  });
}

/**
 * Checks whether something is a function
 * @param {*} thing Anything
 */
export function itIsAFunction(thing) {
  it('is a function', () => {
    expect(thing).to.be.a('function');
  });
}
