'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

/*!
* chartium.js
* Version: 0.0.1
*
* Copyright 2015 Damien Quintal
* Released under the MIT license
* https://github.com/damien-quintal/chartium.js/blob/master/LICENSE.md
*/

var Chartium = function Chartium(context) {
  _classCallCheck(this, Chartium);

  //Lets calc the height and width per chart instance
  var chartDimensions = function chartDimensions(elem, dim) {

    if (elem['offset' + dim]) {
      return elem['offset' + dim];
    }return document.defaultView.getComputedStyle(elem).getPropertyValue(dim);
  };

  this.canvas = context.canvas;

  this.ctx = context;

  var width = this.width = chartDimensions(context.canvas, 'Width');
  var height = this.height = chartDimensions(context.canvas, 'Height');

  // For FF
  context.canvas.width = width;
  context.canvas.height = height;

  var width = this.width = context.canvas.width;
  var height = this.height = context.canvas.height;
  this.aspectRatio = this.width / this.height;

  return this;
};

