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

  function MainCtrl($scope, Login, $mdSidenav) {
    var vm = $scope;
    vm.username = Login.getUser();
    vm.sidenavActive = false;
    Login.changeView('exams');
    vm.showSidenav = function () {
      $mdSidenav('left').open();
    };
  }
}());
