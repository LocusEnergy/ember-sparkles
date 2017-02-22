let hex = (x) => (`0${parseInt(x, 10).toString(16)}`).slice(-2);
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
}

export default class GroupedBarChart {
  constructor(env) {
    this.env = env;
    this.$ = this.env.$;
  }

  groups() {
    return this.$('.rect-group');
  }

  rect(method, property) {
    let rects = this.groups().map((idx, g) => this.$(g).children()).toArray();
    if (!arguments.length) {
      return rects;
    } else {
      return rects.map(g => g.map((idx, r) => this.$(r)[method](property)).toArray());
    }
  }

  fills() {
    return this.rect('css', 'fill').map(m => m.map(rgb2hex));
  }

}
