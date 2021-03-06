(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(Login, $scope) {
    var vm = $scope;
    vm.submit = function (user) {
      if (user) {
        Login.setUser(user);
        // to-do
      }
    };
    vm.register = function (register) {
      if (register) {
        Login.setUser(register);
        // to-do
      }
    };
  }
}());
