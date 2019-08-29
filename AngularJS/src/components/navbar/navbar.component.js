const angular = require('angular');
/* eslint-disable */
angular.module('app-bootstrap').component('navbar', {
  template: require('./navbar.pug')(),
  controller: ['bookService', 'sessionService', '$state', function (bookService, sessionService, $state) {
    this.filterValue = '';
    this.filterType = '';
    this.filterBooks = (event) => {
      event.preventDefault();  
      this.filteredBooks = this.books.filter(book => book[this.filterType].toLowerCase().includes(this.filterValue.toLowerCase()));
    }
    this.books = bookService.getBooks();
    this.filteredBooks = this.books;
    this.logout = () => {
      sessionService.deleteUserInfo();
      $state.transitionTo('registration');
      this.isLogged = false;
    };
  }]
});
