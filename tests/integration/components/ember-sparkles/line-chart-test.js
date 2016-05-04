import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/line-chart', 'Integration | Component | ember sparkles/line chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-sparkles/line-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-sparkles/line-chart}}
      template block text
    {{/ember-sparkles/line-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
