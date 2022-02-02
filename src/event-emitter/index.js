'use strict';

function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

const emitter = new Emitter();

emitter.on('greeting', function () {
  console.log('Hello, Node!');
});

/**
 *
 * this.events = {
 *  greeting: [
 *    function() { console.log('Hello, Node!') }
 *  ]
 * }
 */

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};
