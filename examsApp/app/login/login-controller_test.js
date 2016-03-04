/* global describe, beforeEach, it, expect, inject, module, spyOn*/
'use strict';

describe('LoginCtrl', function () {
  var $scope, Login;

  beforeEach(module('login'));
  beforeEach(inject(function ($rootScope, $controller, _Login_) {
    $scope = $rootScope.$new();
    Login = _Login_;
    spyOn(Login, 'setUser');
    spyOn(Login, 'changeView');
    $controller('LoginCtrl', {
      $scope: $scope,
      Login: Login
    });
  }));

  it('should have defined submit function', function () {
    expect($scope.submit).toBeDefined();
    expect($scope.submit('Test')).toBe(true);
    expect(Login.setUser).toHaveBeenCalledWith('Test');
    expect(Login.changeView).toHaveBeenCalledWith('main');
  });
  it('should return false from submit when user is undefined', function () {
    expect($scope.submit(undefined)).toBe(false);
  });
});
