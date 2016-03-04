(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name login.service:Login
   *
   * @description
   */
  angular
    .module('login')
    .service('Login', Login);

  function Login($state, localStorageService) {
    var self = this;
    self.getUser = function () {
      return localStorageService.get('username');
    };
    self.setUser = function (user) {
      localStorageService.set('username', user.username);
    };
    self.changeView = function (view) {
      $state.go(view);
    };
  }
}());
