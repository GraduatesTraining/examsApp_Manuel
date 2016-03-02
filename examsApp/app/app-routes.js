(function () {
  'use strict';

  angular
    .module('examsApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
