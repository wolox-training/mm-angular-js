angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'dashboard'
      }).state('bookDetails',
      {
        url: '/bookDetails',
        params: {
          id: null
        },
        component: 'bookDetails'
      }).state('registration',
      {
        url: '/registration',
        component: 'registration'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
