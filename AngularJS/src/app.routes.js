angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('navbar.home', {
        url: '/',
        component: 'dashboard'
      }).state('navbar.bookDetails',
      {
        url: '/bookDetails',
        params: {
          id: null
        },
        component: 'bookDetails'
      }).state('navbar', {
        url: '',
        component: 'navbar',
        abstract: true
      }).state('registration',
      {
        url: '/registration',
        component: 'registration'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
