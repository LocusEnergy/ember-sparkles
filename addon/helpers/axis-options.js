import Ember from 'ember';

export function axisOptions([ position, width, height, x=0, y=0 ]) {
  let w = position === 'right' ? width : 0;
  let h = position === 'bottom' ? height : 0;
  let gridLength = position === ('left' || 'right') ? width : height;
  let translate = `translate(${w + x},${h + y})`;
  return { gridLength, translate };
}

export default Ember.Helper.helper(axisOptions);
