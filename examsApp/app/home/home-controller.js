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

  function HomeCtrl($state, Login, $scope) {
    var vm = $scope;
    vm.username = null;
    vm.ctrlName = 'HomeCtrl';
    $state.go('login');
  }
}());
