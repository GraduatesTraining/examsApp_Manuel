/* global describe, beforeEach, it, expect, inject, module, spyOn*/
'use strict';

describe('LoginCtrl', function () {
  var $scope, Login;

  beforeEach(module('login'));

  beforeEach(inject(function ($rootScope, $controller, _Login_) {
    $scope = $rootScope.$new();
    Login = _Login_;
    $controller('LoginCtrl', {
      $scope: $scope
    });
    spyOn(Login, 'setUser');
  }));

  it('should have defined submit function', function () {
    expect($scope.submit).toBeDefined();
    $scope.submit('Test');
    expect(Login.setUser).toHaveBeenCalledWith('Test');
  });
  it('should have defined register function', function () {
    expect($scope.register).toBeDefined();
    $scope.register('Test');
    expect(Login.setUser).toHaveBeenCalledWith('Test');
  });
});
