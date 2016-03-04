(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name exams.controller:ExamsCtrl
   *
   * @description
   *
   */
  angular
    .module('exams')
    .controller('ExamsCtrl', ExamsCtrl);

  function ExamsCtrl($scope) {
    var vm = $scope;
    vm.subjects = [
      {
        title: 'AngularJS',
        color: '#FFD54F',
        icon: '../images/angular.png',
        points: 0,
        exams: 3,
        completed: 0
      },
      {
        title: 'Javascript',
        color: '#ff8a80',
        icon: '../images/javascript.png',
        points: 0,
        exams: 3,
        completed: 0
      },
      {
        title: 'HTML5',
        color: '#DAD8FF',
        icon: '../images/html.png',
        points: 0,
        exams: 3,
        completed: 0
      },
      {
        title: 'CSS3',
        color: '#C5E1A5',
        icon: '../images/css.png',
        points: 0,
        exams: 3,
        completed: 0
      }];
  }
}());
