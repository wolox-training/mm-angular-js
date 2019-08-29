angular.module('app-bootstrap').service('storageService', [
  'localStorageService', '$http',
  function(localStorageService, $http) {
    const sessionToken = 'loggedUserSessionToken';
    this.setSessionToken = (token) => {
      localStorageService.set(sessionToken, token);
      $http.defaults.headers.common.authorization = token;
    };
    this.getSessionToken = () => {
      return localStorageService.get(sessionToken);
    };
    this.removeSessionToken = () => {
      localStorageService.remove(sessionToken);
      delete $http.defaults.headers.common.authorization;
    };
  }
]);
