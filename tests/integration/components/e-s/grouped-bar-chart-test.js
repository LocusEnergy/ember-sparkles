import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import GroupedBarChart from 'ember-sparkles/page-objects/grouped-bar-chart';
import { scaleOrdinal } from 'd3-scale';

moduleForComponent('ember-sparkles/grouped-bar-chart', 'Integration | Component | ember sparkles/grouped bar chart', {
  integration: true,
    beforeEach() {
      this.chart = new GroupedBarChart(this);
    }
});

test('it renders', function(assert) {
  this.set('data', []);
  this.set('groupDomain', []);

  this.render(hbs`
    <svg>
      {{e-s/grouped-bar-chart
        with-transition=false
        data=data
        inputKey=(r/param)
        outputKey=(r/param)
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--grouped-bar-chart').length);
});

test('accepts data and dynamically generates rectangles and legend', function(assert) {
  let data = [
    {
      ts: new Date('2001-03-14T00:00:00-08:00'),
      watts: [
        {
          name: 'series 1',
          value: 10
        },
        {
          name: 'series 2',
          value: 15
        },
        {
          name: 'series 3',
          value: 40
        }
      ]
    },
    {
      ts: new Date('2001-03-15T00:00:00-08:00'),
      watts: [
        {
          name: 'series 1',
          value: 34
        },
        {
          name: 'series 2',
          value: 78
        },
        {
          name: 'series 3',
          value: 12
        }
      ]
    },
    {
      ts: new Date('2001-03-16T00:00:00-08:00'),
      watts: [
        {
          name: 'series 1',
          value: 0
        },
        {
          name: 'series 2',
          value: 99
        },
        {
          name: 'series 3',
          value: 51
        }
      ]
    },
    {
      ts: new Date('2001-03-17T00:00:00-08:00'),
      watts: [
        {
          name: 'series 1',
          value: 89
        },
        {
          name: 'series 2',
          value: 87
        },
        {
          name: 'series 3',
          value: 2
        }
      ]
    }
  ];

  let xDomain =  data.map(({ ts }) => ts);
  let groupDomain = ['series 1', 'series 2', 'series 3'];
  let colorRange = ['#ff0000', '#00ff00', '#0000ff'];
  let colorScale = scaleOrdinal().domain(groupDomain).range(colorRange);

  this.setProperties({ data, xDomain, groupDomain, colorScale });

  this.render(hbs`
    {{#with (band-scale
      xDomain
      (append 0 120)
      round=true
      padding=0
    ) as |xScale|}}

      <svg height="100" width="120">
        {{e-s/grouped-bar-chart
          with-transition=false
          data=data

          inputKey=(r/get 'ts')
          outputKey=(r/get 'watts')
          valueKey=(r/get 'value')
          groupKey=(r/get 'name')

          xScale=xScale
          yScale=(linear-scale
            (append 0 100)
            (append 100 0)
            nice=true
          )
          groupScale=(band-scale
            groupDomain
            (append 0 (compute (get xScale 'bandwidth')))
            padding=0
          )
          colorScale=colorScale
        }}
      </svg>

    {{/with}}

  `);

  let groups = this.chart.groups();
  let transforms = groups.map((idx, g) => this.$(g).attr('transform')).toArray();
  let rects = this.chart.rect();

  // check existence and positioning of rectangle groups
  assert.equal(groups.length, 4, 'there are 4 groups since there are 4 timestamps');
  assert.deepEqual(transforms, ['translate(0,0)', 'translate(30,0)', 'translate(60,0)', 'translate(90,0)'], 'groups are translated to correct x coordinates');

  // check existence, positioning, and attributes of the rectangles themselves
  assert.deepEqual(rects.map(({ length }) => length), [3, 3, 3, 3], 'there are 4 groups with 3 rectangles each');

  let xSequence = ['0', '10', '20'];
  assert.deepEqual(this.chart.rect('attr', 'x'), [xSequence, xSequence, xSequence, xSequence], 'each rectangle has correct x-coordinate');
  assert.deepEqual(this.chart.rect('attr', 'y'), [['90', '85', '60'], ['66', '22', '88'], ['100', '1', '49'], ['11', '13', '98']], 'each rectangle has correct y-coordinate');
  assert.deepEqual(this.chart.rect('attr', 'height'), [['10', '15', '40'], ['34', '78', '12'], ['0', '99', '51'], ['89', '87', '2']], 'each rectangle has correct height');

  let colorSequence = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];
  assert.deepEqual(this.chart.rect('css', 'fill'), [colorSequence, colorSequence, colorSequence, colorSequence], 'each group has a unique fill color that maintains the order given by the color scale\'s specified range');

  // check deletion of data
  data.pop();

  this.setProperties({
    data,
    xDomain: data.map(({ ts }) => ts)
  });

  assert.equal(this.chart.groups().length, 3, 'after removing a data group, there are now 3 groups of rectangles');

  // check updating data
  data.push( {
    ts: new Date('2001-03-18T00:00:00-08:00'),
    watts: [
      {
        name: 'series 1',
        value: 2
      },
      {
        name: 'series 2',
        value: 41
      },
      {
        name: 'series 3',
        value: 90
      }
    ]
  });

  data.push({
    ts: new Date('2001-03-19T00:00:00-08:00'),
    watts: [
      {
        name: 'series 1',
        value: 90
      },
      {
        name: 'series 2',
        value: 70
      },
      {
        name: 'series 3',
        value: 13
      }
    ]
  });

  this.setProperties({
    data,
    xDomain: data.map(({ ts }) => ts)
  });

  xSequence = ['0', '8', '16'];
  assert.equal(this.chart.groups().length, 5, 'after data update, there are now 5 groups of rectangles');
  assert.deepEqual(this.chart.rect('attr', 'x'), [xSequence, xSequence, xSequence, xSequence, xSequence], 'each rectangle has correct x-coordinate after update');
  assert.deepEqual(this.chart.rect('attr', 'y'), [['90', '85', '60'], ['66', '22', '88'], ['100', '1', '49'], ['98', '59', '10'], ['10', '30', '87']], 'each rectangle has correct y-coordinate after update');
  assert.deepEqual(this.chart.rect('attr', 'height'), [['10', '15', '40'], ['34', '78', '12'], ['0', '99', '51'], ['2', '41', '90'], ['90', '70', '13']], 'each rectangle has correct height after update');
  assert.deepEqual(this.chart.rect('css', 'fill'), [colorSequence, colorSequence, colorSequence, colorSequence, colorSequence], 'color sequence order is maintained after update');
});
