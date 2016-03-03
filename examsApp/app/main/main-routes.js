(function () {
  'use strict';

  angular
    .module('main')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  }
}());
