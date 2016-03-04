/* global spyOn, describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ExamsCtrl', function () {
  var $scope, Exam, $state;
  Exam = {
    setSubject: function () {}
  };
  beforeEach(module('exams'));

  beforeEach(inject(function ($rootScope, $controller, _$state_) {
    $scope = $rootScope.$new();
    spyOn(Exam, 'setSubject');
    $state = _$state_;
    spyOn($state, 'go');
    $controller('ExamsCtrl', {
      $scope: $scope,
      Exam: Exam,
      $state: $state
    });
  }));

  it('should have subjects defined', function () {
    expect($scope.subjects).toBeDefined();
  });
  it('should have click subject function', function () {
    $scope.createExam('dummy');
    expect(Exam.setSubject).toHaveBeenCalledWith('dummy');
    expect($state.go).toHaveBeenCalledWith('question');
    expect($scope.createExam(undefined)).toBe(false);
  });
});
