var app = angular.module('wbooks',[]);

app.config(function($stateProvider) {
  var dashboard = {
    name: 'dashboard',
    url: '/dashboard',
    template: 'pages/dashboard.html'
  }

  var bookDetails = {
    name: 'bookDetails',
    url: '/details/{index}',
    template: 'pages/details.html'
  }

  $stateProvider.state(dashboard);
  $stateProvider.state(bookDetails);
});
