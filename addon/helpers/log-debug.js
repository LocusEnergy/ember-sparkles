/* eslint-disable no-console */

import Ember from 'ember';

export function logDebug([ value ], { msg }) {
  return function(value) {
    // debugger
    console.log(`${msg}: `, value);
    return value;
  };
}

export default Ember.Helper.helper(logDebug);
