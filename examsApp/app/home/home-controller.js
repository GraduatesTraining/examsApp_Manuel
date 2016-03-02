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

  function HomeCtrl($state) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    $state.go('login');
  }
}());
