import Ember from 'ember';

let barData = new Ember.A([
  {
    id: 1,
    data: [ [ '2016-03-02T00:00:00', 20], ['2016-03-03T00:00:00', 15], ['2016-03-04T00:00:00', 35], ['2016-03-05T00:00:00', 25] ]
  },
  {
    id: 2,
    data: [ [ '2014-09-12T00:00:00', 45], ['2014-09-13T00:00:00', 2], ['2014-09-14T00:00:00', 61], ['2014-09-15T00:00:00', 30], ['2014-09-16T00:00:00', 51] ]
  }
]);

export default Ember.Controller.extend({
  padding: 0.02,
  dataIdx: 1,
  barData: barData,

  // will need to update this property when we handle multiple series
  data: Ember.computed('barData', 'dataIdx', function() {
    let b = this.get('barData');
    let idx = this.get('dataIdx');
    let result = b.filterBy('id', idx);
    return result[0];
  }),
  
  actions: {
    toggleData() {
      let ids = this.get('barData').mapBy('id');
      let dataIdx = this.get('dataIdx');
      let [ newIdx ] = ids.filter(idx => idx !== dataIdx);
      this.set('dataIdx', newIdx);
    }
  }
});
