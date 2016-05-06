import Ember from 'ember';

export function emberSparklesTranslateY(params/*, hash*/) {
  return function(y) {
    return `translate(0,${y})`;
  };
}

export default Ember.Helper.helper(emberSparklesTranslateY);
