// for ember v2.10+, the hash helper returns an EmptyObject, by design: https://github.com/emberjs/ember.js/issues/14489
// this ensures a POJO in the template, which many helpers expect

import { helper } from '@ember/component/helper';
const { keys } = Object;

export function eSPojo(params, hash) {
  return keys(hash).reduce((pojo, k) => ({ [k]: hash[k], ...pojo }), {});
}

export default helper(eSPojo);
