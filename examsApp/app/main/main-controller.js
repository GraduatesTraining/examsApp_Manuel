(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name main.controller:MainCtrl
   *
   * @description
   *
   */
  angular
    .module('main')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, Login) {
    var vm = $scope;
    vm.username = Login.getUser();
  }
}());
