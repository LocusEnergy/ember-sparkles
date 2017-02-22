import Ember from 'ember';

export function eSPojo(params, hash) {
  let keys = Object.keys(hash);
  return keys.reduce((pojo, k) => ({ [k]: hash[k], ...pojo }), {});
}

export default Ember.Helper.helper(eSPojo);
