import { helper } from '@ember/component/helper';

export function emberSparklesTranslateX() {
  return function(x) {
    return `translate(${x},0)`;
  };
}

export default helper(emberSparklesTranslateX);
