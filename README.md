# ember-sparkles

[![Build Status](https://travis-ci.org/LocusEnergy/ember-sparkles.svg?branch=master)](https://travis-ci.org/LocusEnergy/ember-sparkles)
[![npm version](https://badge.fury.io/js/ember-sparkles.svg)](http://badge.fury.io/js/ember-sparkles)
[![Dependency Status](https://david-dm.org/locusenergy/ember-sparkles.svg)](https://david-dm.org/locusenergy/ember-sparkles)
[![Ember Observer Score](http://emberobserver.com/badges/ember-sparkles.svg)](http://emberobserver.com/addons/ember-sparkles)

![William Shatner in Sparkles](http://i.giphy.com/W1R2pCzmib6h2.gif)

`ember-sparkles` is a collection of composable D3 charts built with [`ember-d3-helpers`](https://github.com/LocusEnergy/ember-d3-helpers) library. It aim to provide D3 graphs that are easy to customize and configure in the template. 

This library currently includes the following charts:
- [Bar Chart](http://locusenergy.github.io/ember-sparkles/#/bar-chart)
- [Grouped Bar Chart](http://locusenergy.github.io/ember-sparkles/#/grouped-bar-chart)
- [Line Chart](http://locusenergy.github.io/ember-sparkles/#/line-chart)
- [Pie Chart](http://locusenergy.github.io/ember-sparkles/#/pie-chart)

Note: PRs for additional charts are welcome.

## How to use

This addon provides `{{ember-sparkles}}` component that you provides the SVG element for graphs rendered inside. Graphs, axis and legends are on contextual components yielded from `ember-sparkles` component. 

```hbs
{{#ember-sparkes 
  data=your-data
  as |chart|
}}
  {{!render your charts here}}
{{/ember-sparkes}}
```

### Axis

To render an axis, add `{{chart.y-axis}}` or `{{chart.x-axis}}` to the `{{#ember-sparkles}}` block.

```hbs
{{#ember-sparkles as |chart|}}
  {{chart.x-axis
    tick-format='%Y-%m-%d'
    label='date'
    dy=100
    dx=-100
  }}
  
  {{graph.y-axis
    label='kWh'
    ticks=5
    yGrid=true
    dx=100
    dy=-30
  }}
{{/ember-sparkles}}
```

### Legend

To show a legend, add `{{chart.legend}}` to the `{{#ember-sparkles}}` block.

```hbs
{{#ember-sparkles as |chart|}}
  {{chart.legend
    dx=50
  }}
{{/ember-sparkles}}
```

## Installation

```
ember install ember-sparkles
```

## Helpful Links

- ### [Live Demo](http://locusenergy.github.io/ember-sparkles/)

- ### [Changelog](CHANGELOG.md)



## Looking for help?
If it is a bug [please open an issue on GitHub](http://github.com/LocusEnergy/ember-sparkles/issues).

## Usage


## Updating the Demo site

```
ember github-pages:commit --message <some commit message>
git push origin master
```
