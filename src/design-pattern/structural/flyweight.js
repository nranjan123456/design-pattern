'use strict';

function Color(name) {
  this.name = name;
}

let colorFactory = {
  colors: {},
  create: function (name) {
    let color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  },
};

module.exports = colorFactory;
