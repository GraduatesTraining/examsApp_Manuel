(function () {
  'use strict';

  angular
    .module('question')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('question', {
        parent: 'main',
        views: {
          'mainView@main': {
            templateUrl: 'question/question.tpl.html',
            controller: 'QuestionCtrl',
            controllerAs: 'question'
          }
        }
      });
  }
}());
