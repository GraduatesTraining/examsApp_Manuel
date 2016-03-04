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

  function QuestionCtrl() {
    var vm = this;
    vm.ctrlName = 'QuestionCtrl';
  }
}());
