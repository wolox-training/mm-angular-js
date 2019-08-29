angular.module('app-bootstrap').service('userService', [
  'httpService',
  function(httpService) {
    this.create = (user) => {
      return httpService.post('api/v1/users/', { user: user });
    };
    this.login = (user) => {
      return httpService.post('api/v1/users/sessions/', { session: user });
    };
  }
]);
