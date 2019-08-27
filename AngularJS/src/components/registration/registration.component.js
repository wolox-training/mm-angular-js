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
    this.createUser = () => {
      this.submitted = true;
      userService.create(this.user);
      $state.transitionTo('navbar.home');
    };
  }]
});
