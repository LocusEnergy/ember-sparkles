import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('data', []);
  // Template block usage:
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        domain=(map-by 'value' data)
      }}
  </svg>
  `);
  assert.ok(this.$('.ember-sparkles--pie-chart').length);
  // var numberOfArcs = this.$('path').length;
  //
  //
  // assert.equal(numberOfArcs, 3, 'The data displays the correct number of arcs');
});


test('The chart accepts data and generates arcs', function(assert) {
  assert.expect(1);
  this.set('data', [
    {
      key: 'arc 1',
      value: 50
    },{
      key: 'arc 2',
      value: 50
    }, {
      key: 'arc 3',
      value: 50
    }
  ]);
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        domain=(map-by 'value' data)
      }}
  </svg>
  `);
  assert.equal(this.$("path").length, 3, 'The number of arcs is correct');
});


// test('the arcs are the proper angles', function(assert) {
//   //Pull the values of each Arc
//   //Calculate percentages
//   //Match them to angles to a margin of error of one degree
// });
