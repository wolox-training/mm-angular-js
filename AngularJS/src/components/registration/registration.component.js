const angular = require('angular');

angular.module('app-bootstrap').component('registration', {
  template: require('./registration.pug')(),
  controller: ['userService', '$state', function (userService, $state) {
    this.submitted = false;
    this.user = {
      name: '',
      lastname: '',
      password: '',
      email: ''
    };
    this.error = {
      name: false,
      lastname: false,
      password: false,
      email: false
    };
    this.createUser = () => {
      this.submitted = true;
      userService.create(this.user);
      $state.transitionTo('home');
    };
  }]
});
