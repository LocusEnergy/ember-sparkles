import Ember from 'ember';

export function axisOptions([ position, width, height, x=0, y=0 ]) {
  let w = position != 'right' ? 0 : width;
  let h = position != 'bottom' ? 0 : height;
  let gridLength = position === ('left' || 'right') ? width : height;
  let translate = `translate(${w + x},${h + y})`;
  return { gridLength, translate };
}

export default Ember.Helper.helper(axisOptions);
