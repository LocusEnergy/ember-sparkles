import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/legend', 'Integration | Component | ember sparkles/legend', {
  integration: true
});

test('it renders', function(assert) {
  this.set('domain', ['series 1', 'series 2', 'series 3']);

  this.render(hbs`{{ember-sparkles/legend
    width=10
    height=10
    domain=domain
    colorScale=(cat-color-scale '20')
    with-transition=false
    shape='rect'
    dx=0
    dy=0
  }}`);

  assert.equal(this.$('text').length, 3, 'there are 3 text elements');
  assert.equal(this.$('rect').length, 3, 'there are 3 rect elements');
});
