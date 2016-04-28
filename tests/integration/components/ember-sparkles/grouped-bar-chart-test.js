import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/grouped-bar-chart', 'Integration | Component | ember sparkles/grouped bar chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
    <svg>
      {{ember-sparkles/grouped-bar-chart
        data=data
        with-transition=false
        height=1
        width=1
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--grouped-bar-chart').length);
});

// give it 2 series
// should plot both
