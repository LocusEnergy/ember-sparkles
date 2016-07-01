import Ember from 'ember';

export function tickFilter([ skipValue=1 ]) {
  return function(d, idx) {
    return (idx % skipValue === 0);
  };
}

export default Ember.Helper.helper(tickFilter);
