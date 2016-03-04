(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name question.controller:QuestionCtrl
   *
   * @description
   *
   */
  angular
    .module('question')
    .controller('QuestionCtrl', QuestionCtrl);

  function QuestionCtrl($http) {
    var vm = this;
    vm.ctrlName = 'QuestionCtrl';
    // $http.get('jsons/angular/1.json');
  }
}());
