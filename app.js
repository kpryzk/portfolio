'use strict';

Portfolio.all = [];

function Portfolio(name, image, path) {
  this.name = name;
  this.image = image;
  this.path = path;
  Portfolio.all.push(this);
}
