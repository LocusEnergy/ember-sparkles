export const MARCH_DATAPOINTS = {
  id: 1,
  data: [
    {
      ts: '2016-03-02T00:00:00',
      value: 20
    },
    {
      ts: '2016-03-03T00:00:00',
      value: 15
    },
    {
      ts: '2016-03-04T00:00:00',
      value: 35
    },
    {
      ts: '2016-03-05T00:00:00',
      value: 25
    }
  ]
};

export const SEPTEMBER_DATAPOINTS = {
  id: 2,
  data: [
    {
      ts: '2014-09-12T00:00:00',
      value: 45
    },
    {
      ts: '2014-09-13T00:00:00',
      value: 2
    },
    {
      ts: '2014-09-14T00:00:00',
      value: 61
    },
    {
      ts: '2014-09-15T00:00:00',
      value: 30
    },
    {
      ts: '2014-09-16T00:00:00',
      value: 51
    }
  ]
};

export const SEPTEMBER_SMALL_DATAPOINTS = {
  id: 3,
  data: [
    {
      ts: '2014-09-12T00:00:00',
      value: 1
    },
    {
      ts: '2014-09-13T00:00:00',
      value: 2
    },
    {
      ts: '2014-09-14T00:00:00',
      value: 1
    },
    {
      ts: '2014-09-15T00:00:00',
      value: 0
    },
    {
      ts: '2014-09-16T00:00:00',
      value: 3
    },
    {
      ts: '2014-09-17T00:00:00',
      value: 4
    }
  ]
};

export const SEPTEMBER_MANY_DATAPOINTS = {
  id: 4,
  data: [
    {
      ts: '2014-09-12T00:00:00',
      value: 1012
    },
    {
      ts: '2014-09-13T00:00:00',
      value: 234
    },
    {
      ts: '2014-09-14T00:00:00',
      value: 1255
    },
    {
      ts: '2014-09-15T00:00:00',
      value: 980
    },
    {
      ts: '2014-09-16T00:00:00',
      value: 334
    },
    {
      ts: '2014-09-17T00:00:00',
      value: 467
    },
    {
      ts: '2014-09-18T00:00:00',
      value: 991
    },
    {
      ts: '2014-09-19T00:00:00',
      value: 710
    },
    {
      ts: '2014-09-20T00:00:00',
      value: 808
    },
    {
      ts: '2014-09-21T00:00:00',
      value: 500
    },
    {
      ts: '2014-09-25T00:00:00',
      value: 330
    },
    {
      ts: '2014-09-26T00:00:00',
      value: 990
    },
    {
      ts: '2014-09-27T00:00:00',
      value: 683
    },
    {
      ts: '2014-09-28T00:00:00',
      value: 90
    },
    {
      ts: '2014-09-29T00:00:00',
      value: 1166
    },
  ]
};

export const timeseriesData = [
  MARCH_DATAPOINTS,
  SEPTEMBER_DATAPOINTS,
  SEPTEMBER_SMALL_DATAPOINTS,
  SEPTEMBER_MANY_DATAPOINTS
];

export const parallelTimeseriesData = [
  {
    ts: '2014-09-12T00:00:00',
    Wh_sum: [
      {
        name: 'series 1',
        value: 45
      },
      {
        name: 'series 2',
        value: 89
      },
      {
        name: 'series 3',
        value: 13
      }
    ]
  },
  {
    ts: '2014-09-13T00:00:00',
    Wh_sum: [
      {
        name: 'series 1',
        value: 73
      },
      {
        name: 'series 2',
        value: 13
      },
      {
        name: 'series 3',
        value: 56
      }
    ]
  },
  {
    ts: '2014-09-14T00:00:00',
    Wh_sum: [
      {
        name: 'series 1',
        value: 5
      },
      {
        name: 'series 2',
        value: 45
      },
      {
        name: 'series 3',
        value: 38
      }
    ]
  },
  {
    ts: '2014-09-15T00:00:00',
    Wh_sum: [
      {
        name: 'series 1',
        value: 51
      },
      {
        name: 'series 2',
        value: 21
      },
      {
        name: 'series 3',
        value: 64
      }
    ]
  },
  {
    ts: '2014-09-16T00:00:00',
    Wh_sum: [
      {
        name: 'series 1',
        value: 1
      },
      {
        name: 'series 2',
        value: 39
      },
      {
        name: 'series 3',
        value: 75
      }
    ]
  }
];
