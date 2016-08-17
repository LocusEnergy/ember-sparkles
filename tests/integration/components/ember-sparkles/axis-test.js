import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/axis', 'Integration | Component | ember sparkles/axis', {
  integration: true
});

test('accepts a scale argument', function(assert) {
  this.set('domain', ['2016-03-02', '2016-03-03', '2016-03-04', '2016-03-05']);

  this.render(hbs`
    {{ember-sparkles/axis
      scale=(band-scale
        domain
        (append 0 100)
      )
      label='elephants'
      position='bottom'
      with-transition=false
      dy=30
      dx=-100
    }}
  `);

  assert.ok(this.$('.axis').length, 'axis renders');
  assert.equal(this.$('.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  assert.equal(this.$('.axis .tick').first().text(), '2016-03-02', 'ticks on x axis are formatted correctly');
  assert.equal(this.$('.label').text(), 'elephants', 'displays a label');

  this.set('domain', ['2016-03-01', '2016-03-03', '2016-03-05']);
  assert.equal(this.$('.axis .tick').length, 3, 'axis updates when data changes');
  assert.equal(this.$('.axis .tick').first().text(), '2016-03-01', 'axis updates correctly');
});
