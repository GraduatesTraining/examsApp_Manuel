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
    vm.ctrlName = 'LoginCtrl';
    vm.user = null;
    vm.submit = function (user) {
      if (user) {
        Login.setUser(user);
      }
    };
    vm.register = function (register) {
      if (register) {
        Login.setUser(register);
      }
    };
  }
}());
