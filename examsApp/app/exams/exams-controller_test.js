/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ExamsCtrl', function () {
  var $scope;

  beforeEach(module('exams'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ExamsCtrl', {
      $scope: $scope
    });
  }));

  it('should have subjects defined', function () {
    expect($scope.subjects).toBeDefined();
  });
});
