import { helper } from '@ember/component/helper';

export function axisOptions([ position, width, height, x=0, y=0 ]) {
  let w = position === 'right' ? width : 0;
  let h = position === 'bottom' ? height : 0;
  let translate = `translate(${w + x},${h + y})`;

  let gridLength;
  if (position === 'left' || position === 'right') {
    gridLength = width;
  } else {
    gridLength = height;
  }

  return { gridLength, translate };
}

export default helper(axisOptions);
