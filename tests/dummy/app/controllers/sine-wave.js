import Ember from 'ember';
import _ from 'lodash/lodash';

// BEGIN-SNIPPET sine-wave-example
import { task, timeout } from 'ember-concurrency';
const { computed } = Ember;
const { PI, sin } = Math;

const TAU = 2 * PI;
const DELTA = 20;
const STEP = TAU / DELTA;

const data = _.range(0, TAU, STEP).map(x => ({ x, y: sin(x) }));

const translate = (d) => {
  let X = d.map(({ x }) => x);
  let Y = d.map(({ y }) => y);
  Y.unshift(Y.pop());
  return _.zipWith(X, Y, (x, y) => ({ x, y }));
}

export default Ember.Controller.extend({
  data: data,
  period: 1000,
  counter: 0,
  delta: DELTA,

  wave: computed('data', function() {
    let data = this.get('data');
    return [ { data, name: 'wave' } ];
  }),

  cycle: task(function * () {
    while(true) {
      let c = this.get('counter');
      let data = translate(this.get('data'));
      this.set('data', data);
      this.set('theta', data[c % DELTA]['x']);
      c++;
      this.set('counter', c);
      console.log(this.get('period') / this.get('delta'))
      yield timeout(this.get('period') / this.get('delta'));
    }
  }).on('init')

});
