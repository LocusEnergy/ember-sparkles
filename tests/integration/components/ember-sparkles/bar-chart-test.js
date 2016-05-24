import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import BarChart from 'ember-sparkles/page-objects/bar-chart';

moduleForComponent('ember-sparkles/bar-chart', 'Integration | Component | ember sparkles/bar chart', {
  integration: true,
  beforeEach() {
    this.chart = new BarChart(this);
  }
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
    <svg>
      {{ember-sparkles/bar-chart
        data=data
        with-transition=false
        height=1
        width=1

        xScale=(band-scale)
        yScale=(linear-scale)
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--bar-chart').length);
});

test('it accepts data and generates rectangles', function(assert) {
  let data = [
    [ new Date('2016-03-02T00:00:00-08:00'), 9 ],
    [ new Date('2016-03-03T00:00:00-08:00'), 42 ],
    [ new Date('2016-03-04T00:00:00-08:00'), 65 ],
    [ new Date('2016-03-05T00:00:00-08:00'), 17 ]
  ];

  this.setProperties({
    data,
    xDomain: data.map(d => d[0])
  });

  // set the y domain to a nice even amount so that the y values and heights are easy to infer
  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data
        inputAccessor=(d3-get '0')
        outputAccessor=(d3-get '1')

        xScale=(band-scale
          xDomain
          (append 0 100)
          padding=0
          round=true
        )
        yScale=(linear-scale
          (append 0 100)
          (append 100 0)
          nice=true
        )
        tick-format='%Y-%m-%d'
        ticks=5
        width=100
        height=100
        with-transition=false
      }}
    </svg>`
  );


  // check rectangle existence and attributes
  assert.equal(this.chart.rect().length, 4, 'there are 4 <rect> elements');
  assert.deepEqual(this.chart.getAttr('x'), ['0', '25', '50', '75'], 'each rectangle has an x coordinate, and they are evenly spaced');
  assert.deepEqual(this.chart.getAttr('y'), ['91', '58', '35', '83'], 'each rectangle has a properly calculated y-coordinate');
  assert.deepEqual(this.chart.getAttr('width'), ['25', '25', '25', '25'], 'each rectangle has a width attribute, all width values are equal');
  assert.deepEqual(this.chart.getAttr('height'), ['9', '42', '65', '17'], 'each rectangle has a properly calculated height attribute');

  // check axes existence and attributes
  assert.ok(this.$('.x.axis').length, 'x axis renders');
  assert.ok(this.$('.y.axis').length, 'y axis renders');
  assert.equal(this.$('.x.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  assert.equal(this.$('.y.axis .tick').length, 6, 'there are 6 ticks on the y axis');
  assert.equal(this.$('.x.axis .tick').first().text(), '2016-03-02', 'ticks on x axis are formatted correctly');
});

test('data can be updated and removed', function(assert) {

  // choose values that are even factors of 5, with a max of 50,
  // because the chart height is 100, the resultant heights will be twice the original value and easy to infer
  let data = [
    [ new Date('2016-03-02T00:00:00-08:00'), 5 ],
    [ new Date('2016-03-03T00:00:00-08:00'), 50 ],
    [ new Date('2016-03-04T00:00:00-08:00'), 30 ],
    [ new Date('2016-03-05T00:00:00-08:00'), 15 ]
  ];

  this.setProperties({
    data,
    xDomain: data.map(d => d[0])
  });

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data
        input-accessor=(d3-get '0')
        output-accessor=(d3-get '1')
        x-scale=(band-scale
          xDomain
          (append 0 100)
          padding=0
          round=true
        )
        y-scale=(linear-scale
          (append 0 (d3-array 'max' data (d3-get '1')))
          (append 100 0)
          nice=true
        )
        tick-format='%Y-%m-%d'
        ticks=5
        width=100
        height=100
        with-transition=false
      }}
    </svg>`
  );

  assert.deepEqual(this.chart.getAttr('y'), ['90', '0', '40', '70'], 'the y-coordinates correspond to the first dataset');
  assert.deepEqual(this.chart.getAttr('height'), ['10', '100', '60', '30'], 'height attributes correspond to first dataset');
  assert.equal(this.$('.x.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  assert.equal(this.$('.y.axis .tick').last().text(), '50', 'largest tick on y axis is the maximum y value');
  assert.equal(this.$('.x.axis .tick').first().text(), '2016-03-02', 'tick on x axis is formatted with correct value');

  data = [
    [ new Date('2014-09-12T00:00:00-08:00'), 45 ],
    [ new Date('2014-09-13T00:00:00-08:00'), 10 ],
    [ new Date('2014-09-14T00:00:00-08:00'), 61 ],
    [ new Date('2014-09-15T00:00:00-08:00'), 30 ],
    [ new Date('2014-09-16T00:00:00-08:00'), 51 ]
  ];

  this.setProperties({
    data,
    xDomain: data.map(d => d[0])
  });

  assert.deepEqual(this.chart.getAttr('y'), ['55', '90', '39', '70', '49'], 'the y-coordinates correspond to the second dataset');
  assert.deepEqual(this.chart.getAttr('height'), ['45', '10', '61', '30', '51'], 'height attributes correspond to second dataset');
  assert.equal(this.$('.x.axis .tick').length, 5, 'there are now 5 ticks on the x axis');
  assert.equal(this.$('.y.axis .tick').last().text(), '100', 'largest tick on y axis is 100');
  assert.equal(this.$('.x.axis .tick').first().text(), '2014-09-12', 'tick on x axis is formatted with correct value');
});
