import Ember from 'ember';

export default Ember.Controller.extend({
  data: [ [ new Date('2010-10-11'), 20 ], [ new Date('2010-10-12'), 15 ], [ new Date('2010-10-13'), 25] ],

  xDomain: [new Date('2010-10-11'), new Date('2010-10-13')],

  yDomain: [15, 25]
});
