const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.pug')(),
  controller: ['userService', 'sessionService', '$state', function (userService, sessionService, $state) {
    this.user = {
      password: '',
      email: ''
    };
    this.login = (validForm) => {
      if (validForm) {
        userService.create(this.user)
        .then((response) => {
          sessionService.setUserInfo(response.data);
          $state.transitionTo('navbar.home');
        })
        .catch((erro) => {
          if (erro.status === 401) {
            this.loginAuthError = true;
          }
        });
      }
    };
  }]
});
