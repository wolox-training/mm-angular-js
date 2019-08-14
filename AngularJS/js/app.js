var app = angular.module('wbooks',['ui.router']);

app.config(function($stateProvider) {
  var dashboard = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'pages/dashboard.html'
  }

  var bookDetails = {
    name: 'bookDetails',
    url: '/details',
    templateUrl: 'pages/details.html'
  }

  $stateProvider.state(dashboard);
  $stateProvider.state(bookDetails);
});
