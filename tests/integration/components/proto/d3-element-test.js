import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('proto/d3-element', 'Integration | Component | proto/d3 element', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{proto/d3-element}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#proto/d3-element}}
      template block text
    {{/proto/d3-element}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
