(function () {
  'use strict';

  angular
    .module('exams')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('exams', {
        parent: 'main',
        views: {
          'mainView@main': {
            templateUrl: 'exams/exams.tpl.html',
            controller: 'ExamsCtrl',
            controllerAs: 'exams'
          }
        }
      });
  }
}());
