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
  let data = [ [ new Date('2010-10-11'), 20 ], [ new Date('2010-10-12'), 15 ], [ new Date('2010-10-13'), 25] ];

  this.set('data', data);

  this.set('xDomain', [new Date('2010-10-11'), new Date('2010-10-13')]);
  this.set('xRange', [0, 100]);

  this.set('yDomain', [15, 25]);
  this.set('yRange', [0, 100]);

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart data=data xScale=(time-scale xDomain xRange) yScale=(linear-scale yDomain yRange)}}
    </svg>`
  );

  let rect = this.$('rect');
  let xCoordinates = getAttr(rect, 'x');
  let yCoordinates = getAttr(rect, 'y');

  assert.equal(rect.length, 3, 'there are 3 <rect> elements');
  assert.deepEqual(xCoordinates, ['0', '50', '100'], 'each rectangle has an x coordinate, and they evenly split the range');
  // assert.deepEqual(yCoordinates, ['0', '50', '100'], 'each rectangle has a y coordinate');
});

// test that data can be updated
// test width of rectangles
// test height of rectangles
