const angular = require('angular');

angular.module('app-bootstrap').component('registration', {
  template: require('./registration.pug')(),
  controller: ['userService', 'sessionService', '$state', function (userService, sessionService, $state) {
    this.user = {
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      email: '',
      locale: 'es'
    };
    this.createUser = (validForm) => {
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
