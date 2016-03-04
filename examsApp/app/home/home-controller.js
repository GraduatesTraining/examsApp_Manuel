(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($state, $scope) {
    var vm = $scope;
    vm.username = null;
    $state.go('login');
  }
}());
