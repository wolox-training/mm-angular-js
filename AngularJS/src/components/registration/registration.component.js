const angular = require('angular');

angular.module('app-bootstrap').component('registration', {
  template: require('./registration.pug')(),
  controller: [function () {
    this.component2Phrase = 'This is registration 2';
  }]
});
