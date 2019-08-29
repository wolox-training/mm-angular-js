angular.module('app-bootstrap').service('sessionService', [
  'storageService', '$http',
  function (storageService, $http) {
    let login = !!storageService.getSessionToken();
    if (login) {
      $http.defaults.headers.common.authorization = storageService.getSessionToken();
    }
    this.setUserInfo = (userData) => {
      login = true;
      storageService.setSessionToken(userData.access_token);
    };

    this.deleteUserInfo = () => {
      login = false;
      storageService.removeSessionToken();
    };
    this.loginState = () => {
      return login;
    };
  }
]);
