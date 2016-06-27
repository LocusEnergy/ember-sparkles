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
    <svg>
      {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        height=1
        width=1
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--pie-chart').length);
});
