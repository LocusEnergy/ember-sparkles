let hex = (x) => (`0${parseInt(x, 10).toString(16)}`).slice(-2);
let rgb2hex = (rgb) => {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  let matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return `#${hex(matches[1])}${hex(matches[2])}${hex(matches[3])}`;
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

// phantomJS + chrome return hex and rgb values, respectively. we convert all fills to hex
  fills() {
    return this.rect('css', 'fill').map(m => m.map(rgb2hex));
  }

}
