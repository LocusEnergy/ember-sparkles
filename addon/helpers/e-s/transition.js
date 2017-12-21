import { helper } from '@ember/component/helper';
import { transition } from 'd3-transition';

export function emberSparklesTransition(params, { duration }) {
  return transition().duration(duration);
}

export default helper(emberSparklesTransition);
