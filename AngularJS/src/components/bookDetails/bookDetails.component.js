const angular = require('angular');

angular.module('app-bootstrap').component('bookDetails', {
  template: require('./bookDetails.pug')(),
  controller: ['$stateParams', 'bookService', function ($stateParams, bookService) {
    this.book = bookService.getBookById(parseInt($stateParams.id));
  }]
});
