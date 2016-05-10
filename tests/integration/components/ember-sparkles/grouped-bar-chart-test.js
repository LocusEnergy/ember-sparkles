import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/grouped-bar-chart', 'Integration | Component | ember sparkles/grouped bar chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.set('groupDomain', []);
 
  this.render(hbs`
    <svg>
      {{ember-sparkles/grouped-bar-chart
        height=1
        width=1
        with-transition=false
        data=data
        groupDomain=groupDomain
        inputAccessor=(d3-get)
        outputAccessor=(d3-get)
        xScale=(band-scale)
        yScale=(linear-scale)
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--grouped-bar-chart').length);
});

test('it accepts data and generates rectangles', function(assert) {
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
  
  this.setProperties({
    data,
    groupDomain: ['series 1', 'series 2', 'series 3'],
    xDomain: data.map(({ ts }) => ts)
  });
  
  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/grouped-bar-chart
        width=100
        height=100
        with-transition=false
        data=data
        groupDomain=groupDomain
        
        inputAccessor=(d3-get 'ts')
        outputAccessor=(d3-get 'watts')
        valueAccessor=(d3-get 'value')
        groupAccessor=(d3-get 'name')
        
        xScale=(band-scale
          xDomain
          (append 0 100)
          round=true
          padding=0
        )
        yScale=(linear-scale
          (append 0 100)
          (append 100 0)
          nice=true
        )
        colorScale=(cat-color-scale '20c')
        groupPadding=0
        ticks=5
      }}
    </svg>
  `);
  
  let groups = this.$('.rect-group')
  let transforms = groups.map((idx, g) => $(g).attr('transform')).toArray();
  let rects = groups.map((idx, g) => $(g).children()).toArray();
  
  // check existence and positioning of rectangle groups
  assert.equal(groups.length, 4, 'there are 4 groups since there are 4 timestamps');
  assert.deepEqual(transforms, ['translate(0,0)', 'translate(25,0)', 'translate(50,0)', 'translate(75,0)'], 'groups are translated to correct x coordinates');
  assert.equal(this.$('.rect-group rect').length, 12, 'there are 12 rectangles');

  console.log(rects[0])

  


  // check axes existence and attributes
  assert.ok(this.$('.x.axis').length, 'x axis renders');
  assert.ok(this.$('.y.axis').length, 'y axis renders');
  assert.equal(this.$('.x.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  assert.equal(this.$('.y.axis .tick').length, 6, 'there are 6 ticks on the y axis');
  assert.equal(this.$('.x.axis .tick').first().text(), '2001-03-14', 'ticks on x axis are formatted correctly');


});



// test('it updates and exits data') 
// updates number of rectangles, colors are consistent
// test('it generates a dynamic legend')

// give it 2 series
// should plot both

//  TODO: major / minor scale??, invoke -> null  --}}
  // if data is in right format, then default scales just get set up automatically --}}
//  add legend  --}}
//  legend test: should be able to turn off / on with a property --}}

//  check that update keeps things in order  --}}
//  check that legend is also in order --}}
