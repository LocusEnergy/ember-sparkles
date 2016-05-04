import Ember from 'ember';

export function emberSparklesMap([ collection, callback ]) {
  return collection.map(callback);
}

export default Ember.Helper.helper(emberSparklesMap);
