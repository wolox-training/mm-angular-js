const angular = require('angular');

angular.module('app-bootstrap').component('registration', {
  template: require('./registration.pug')(),
  controller: ['userService', function (userService) {
    this.createUser = function() {
      this.name = '';
      this.lastname = '';
      this.password = '';
      this.email = '';
      this.sendForm = function() {
        if (this.name && this.lastname && this.password && this.email) {
          const user = { name: this.name,
            lastname: this.lastname,
            password: this.password,
            email: this.email };
          userService.create(user);
          this.transitionTo('home');
        }
      };
    };
  }]
});
