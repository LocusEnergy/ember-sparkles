import { helper } from '@ember/component/helper';

export function barHeight([ height ]) {
  return function(d) {
    return height - d;
  };
}

export default helper(barHeight);
