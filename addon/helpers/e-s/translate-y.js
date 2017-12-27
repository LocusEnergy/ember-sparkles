import { helper } from '@ember/component/helper';

export function emberSparklesTranslateY() {
  return function(y) {
    return `translate(0,${y})`;
  };
}

export default helper(emberSparklesTranslateY);
