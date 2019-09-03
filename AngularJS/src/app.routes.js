angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('navbar.home', {
        url: '/',
        component: 'dashboard',
        data: {
          requireLogin: true
        }
      }).state('navbar.bookDetails',
      {
        url: '/bookDetails',
        data: {
          requireLogin: true
        },
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
        component: 'registration',
        data: {
          requireLogin: false
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
