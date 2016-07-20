import Ember from 'ember';

export function emberSparklesAttrTween([ element ], { arcTweenFn }) {
  return function(d3el) {
    return d3el.attrTween(element, arcTweenFn);
  };
}

export default Ember.Helper.helper(emberSparklesAttrTween);
