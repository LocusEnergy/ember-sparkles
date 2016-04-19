import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/bar-chart', 'Integration | Component | ember sparkles/bar chart', {
  integration: true
});

let getAttr = (collection, attribute) => collection.map((idx, item) => $(item).attr(attribute)).toArray();

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`<svg>{{ember-sparkles/bar-chart data=data}}</svg>`);
  assert.equal(this.$().text().trim(), '');
});

test('it accepts data argument', function(assert) {
  // TODO: use MomentJS objects
  // check if works with D3 date parse function, so can pass strings as dates? maybe this is in d3-scale library?

  let first = new Date("2016-03-02T05:00:00.000Z");
  let last = new Date("2016-03-05T05:00:00.000Z");

  let data = [[ first, 20], [new Date("2016-03-03T05:00:00.000Z"), 15], [new Date("2016-03-04T05:00:00.000Z"), 35], [last, 25] ];
  this.set('data', data);

  this.set('xDomain', [first, last]);
  this.set('xRange', [0, 100]);

  this.set('yDomain', [0, 35]);
  this.set('yRange', [100, 0]);

  this.set('padding', 0);

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data

        xScale=(band-scale
          xDomain
          xRange
          round=true
          padding=padding
        )
        yScale=(linear-scale yDomain yRange)
        width=100
        height=100
      }}
    </svg>`
  );

  return stop();

  let rect = this.$('rect');

  assert.equal(rect.length, 3, 'there are 3 <rect> elements');
  // assert.equal(getAttr(rect, 'x').length, 3, 'each rect has an x attribute');
  assert.deepEqual(getAttr(rect, 'x'), ['0', '50', '100'], 'each rectangle has an x coordinate, and they evenly split the range');
  assert.deepEqual(getAttr(rect, 'y'), ['50', '100', '0'], 'each rectangle has a y coordinate');
  assert.equal(getAttr(rect, 'width').length, 3, 'each rect has a width attribute');
  assert.equal(getAttr(rect, 'height').length, 3, 'each rect has a height attribute');
});

// test that data can be updated
// test width of rectangles
// test height of rectangles
