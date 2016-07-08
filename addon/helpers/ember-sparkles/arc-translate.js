import Ember from 'ember';

export function emberSparklesArcTranslate([ centroid ], { height, width }) {
  return function(d) {
    let x, y;
    [x, y] = centroid(d)
    x = x + width;
    y = y + height;
    let coordinates = [];
    coordinates.push(x);
    coordinates.push(y);
    return `translate(${coordinates})`;
  };
}

export default Ember.Helper.helper(emberSparklesArcTranslate);
