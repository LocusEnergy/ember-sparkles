# ember-sparkles

[![Build Status](https://travis-ci.org/LocusEnergy/ember-sparkles.svg?branch=master)](https://travis-ci.org/LocusEnergy/ember-sparkles)
[![npm version](https://badge.fury.io/js/ember-sparkles.svg)](http://badge.fury.io/js/ember-sparkles)
[![Dependency Status](https://david-dm.org/locusenergy/ember-sparkles.svg)](https://david-dm.org/locusenergy/ember-sparkles)
[![Ember Observer Score](http://emberobserver.com/badges/ember-sparkles.svg)](http://emberobserver.com/addons/ember-sparkles)

<img src="http://i.giphy.com/W1R2pCzmib6h2.gif" alt="William Shatner in Sparkles" align="right">

`ember-sparkles` is a collection of composable D3 charts built with [`ember-d3-helpers`](https://github.com/LocusEnergy/ember-d3-helpers) library. It aims to provide reactive and highly performant D3-based data visualizations through simple template-bound configurations.

This library currently includes the following charts:
- [Bar Chart](http://locusenergy.github.io/ember-sparkles/#/bar-chart)
- [Grouped Bar Chart](http://locusenergy.github.io/ember-sparkles/#/grouped-bar-chart)
- [Line Chart](http://locusenergy.github.io/ember-sparkles/#/line-chart)
- [Pie Chart](http://locusenergy.github.io/ember-sparkles/#/pie-chart)

Note: This library is still in beta, please use carefully, and file issues as discovered. Pull requests for additional charts always welcome!

## How to use

This addon includes an `{{ember-sparkles}}`, which renders a responsive SVG container element. D3-based graphs, axes, and legend components are contextually yielded from this component.

### example

```hbs
{{#ember-sparkes
  data=your-data

  input-key='ts'
  output-key='value'

  x-scale-type='band'
  y-scale-type='linear'
  x-domain=(map (r/get 'ts') data)
  y-domain=(append 0 outputMax)


  as |chart|
}}
  {{!render your charts here}}
{{/ember-sparkes}}
```

### Properties (WIP)

* `data {Array}` **required**

  Array containing data, structure depending on data visualization type.

* `input-key {String}` **required**

  Key by which to obtain independent variable from array or object. Defaults to zeroth index of array.

* `output-key {String}` **required**

  Key by which to obtain dependent variable from array or object. Defaults to first index of array.

* `x-scale-type {String}` **optional**

  Type of D3 scale function to use for horizontal axis.

  _default:_ `linear`

* `y-scale-type {String}` **optional**

  Type of D3 scale function to use for vertical axis.

  _default:_ `linear`

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

  {{chart.y-axis
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
