const angular = require('angular');

angular.module('app-bootstrap').factory('userService', [
  function() {
    var listUsers = [];
    return {
      getUsers: () => listUsers,
      getUsersyId: (id) => listUsers.find(user => user.id === id),
      create: (user) => listUsers.push(user)
    };
  }
]);
