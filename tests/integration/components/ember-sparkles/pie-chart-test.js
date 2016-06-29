import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-sparkles/pie-chart}}`);
  this.set('data', []);
  // Template block usage:
  this.render(hbs`
    {{#ember-sparkles as |chart|}}
      {{chart.pie-chart
        data=pieData
        width=1
        height=1
      }}
    {{/ember-sparkles}}
  `);
  assert.ok(this.$('.ember-sparkles--pie-chart').length);
});

// test('the arcs are the proper angles', function(assert) {
//   //Pull the populations of each Arc
//   //Calculate percentages
//   //Match them to angles to a margin of error of one degree
// });
