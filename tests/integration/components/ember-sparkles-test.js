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
  assert.equal(this.$('svg').attr('width'), 960, 'svg has width attribute of 960');
  assert.equal(this.$('svg').attr('height'), 500, 'svg has height attribute of 500');
  assert.equal(this.$('g').attr('transform'), 'translate(25,20)', 'g has transform attribute');
});

test('it can take positional arguments for width, height, and margins', function(assert) {
  this.set('margin', {
    top: 13,
    right: 10,
    bottom: 20,
    left: 7,
  });
  this.render(hbs`
    {{#ember-sparkles 220 100 margin}}
      <circle></circle>
    {{/ember-sparkles}}
  `);

  assert.equal(this.$('svg').attr('width'), 220, 'svg has width attribute of 220');
  assert.equal(this.$('svg').attr('height'), 100, 'svg has height attribute of 100');
  assert.equal(this.$('g').attr('transform'), 'translate(7,13)', 'g has transform attribute');
});


test('chart.bar-chart renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
    {{#ember-sparkles width=960 height=500 as |chart|}}
      {{chart.bar-chart
        data=data
        with-transition=false
        height=1
        width=1
      }}
    {{/ember-sparkles}}
  `);

  assert.ok(this.exists('.ember-sparkles--bar-chart'), 'bar-chart component rendered');
});
