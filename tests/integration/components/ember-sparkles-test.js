import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles', 'Integration | Component | ember sparkles', {
  integration: true,
  beforeEach() {
    this.exists = (selector) => this.$(selector).length;
  }
});

// TODO: add viewBox if no height / width

test('it renders an SVG element', function(assert) {
  this.render(hbs`
    {{#ember-sparkles}}
      <circle></circle>
    {{/ember-sparkles}}
  `);

  assert.ok(this.exists('svg'), 'svg element is rendered');
  assert.ok(this.exists('circle'), 'circle is rendered from block');
});

test('it has sensible defaults for SVG dimensions and margins', function(assert) {
  this.render(hbs`
    {{#ember-sparkles}}
      <circle></circle>
    {{/ember-sparkles}}
  `);

  assert.ok(this.exists('g'), 'g element exists');
  assert.equal(this.$('svg').attr('width'), '100%', 'svg has width attribute is set to 100%');
  assert.equal(this.$('svg').attr('height'), '100%', 'svg has height attribute is set to 100%');
  assert.equal(this.$('g').attr('transform'), 'translate(40,20)', 'g has transform attribute');
});

test('it renders basic SVG elements', function(assert) {
  this.render(hbs`
    {{#ember-sparkles}}
      <circle r='10'></circle>
    {{/ember-sparkles}}
  `);

  assert.ok(this.$('circle').length, 'has <circle> element');
});
