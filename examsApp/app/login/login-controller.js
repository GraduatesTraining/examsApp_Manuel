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

  function LoginCtrl() {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
    vm.user = null;
    vm.submit = function (user) {
      vm.user = angular.copy(user);
      // to-do
    };
    vm.register = function (register) {
      vm.user = angular.copy(register);
      // to-do
    };
  }
}());
