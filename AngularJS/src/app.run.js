angular.module('app-bootstrap').run([
'$transitions', 'sessionService',
  function ($transitions, sessionService) {
    $transitions.onBefore({}, function(transition) {
      if (transition.to().data.requireLogin && !sessionService.loginState()) {
        return transition.router.stateService.target('registration');
      } else if (!transition.to().data.requireLogin && sessionService.loginState()) {
        return transition.router.stateService.target('navbar.home');
      }
    });
  }    
]);
