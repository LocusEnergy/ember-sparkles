import Ember from 'ember';

export function emberSparklesArcTranslate([ centroid ]) {
  return function(d) {
    return `translate(${centroid(d)})`;
  };
}

export default Ember.Helper.helper(emberSparklesArcTranslate);
