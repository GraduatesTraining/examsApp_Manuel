(function () {
  'use strict';

  /* @ngdoc object
   * @name examsApp
   * @description
   *
   */
  angular
    .module('examsApp', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'home',
      'login',
      'main',
      'exams',
      'question'
    ]);
}());
