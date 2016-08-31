import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/line-chart', 'Integration | Component | ember sparkles/line chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
    <svg>
      {{e-s/line-chart
        data=data
        with-transition=false
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--line-chart').length);
});
