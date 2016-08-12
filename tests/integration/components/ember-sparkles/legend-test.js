import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/legend', 'Integration | Component | ember sparkles/legend', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-sparkles/legend}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-sparkles/legend}}
      template block text
    {{/ember-sparkles/legend}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
