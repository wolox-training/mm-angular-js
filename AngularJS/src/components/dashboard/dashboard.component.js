const angular = require('angular');
/* eslint-disable */
angular.module('app-bootstrap').component('dashboard', {
  template: require('./dashboard.pug')(),
  controller: ['bookService', function (bookService) {
    this.filterValue = '';
    this.filterType = '';
    this.filterBooks = function() {
      this.filteredBooks = this.books.filter(book => book[this.filterType].toLowerCase().includes(this.filterValue.toLowerCase()));
    };
    this.books = bookService.getBooks();
    this.filteredBooks = this.books;
  }]
});
