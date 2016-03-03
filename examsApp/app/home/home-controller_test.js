/* global describe, beforeEach, it, expect, inject, module, spyOn */
'use strict';

describe('HomeCtrl', function () {
  var $scope, $state;
  beforeEach(module('home'));
  beforeEach(inject(function ($controller, $rootScope, _$state_) {
    $state = _$state_;
    spyOn($state, 'go');
    $scope = $rootScope.$new();
    $controller('HomeCtrl', {
      $scope: $scope,
      $state: $state
    });
  }));
  it('should have username as null', function () {
    expect($scope.username).toEqual(null);
  });
  it('should go to the login view', function () {
    expect($state.go).toHaveBeenCalledWith('login');
  });
});
