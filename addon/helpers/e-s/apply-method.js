import Ember from 'ember';

export function eSApplyMethod([ partialFn, ...args ], { method }) {
  partialFn[method].call(null, ...args);
  return partialFn;
}

export default Ember.Helper.helper(eSApplyMethod);
