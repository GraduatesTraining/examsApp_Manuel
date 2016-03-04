/* global jasmine, describe, beforeEach, it, expect, inject, module, spyOn */
'use strict';

describe('MainCtrl', function () {
  var Login, $scope, $mdSidenav, returnVal;
  Login = {
    changeView: function () {},
    getUser: function () {}
  };
  returnVal = {open: function () {}};

  beforeEach(module('main'));
  beforeEach(module('login'));
  beforeEach(module('examsApp'));
  beforeEach(inject(function ($rootScope, $controller) {
    spyOn(returnVal, 'open');
    $scope = $rootScope.$new();
    $mdSidenav = jasmine.createSpy('$mdSidenav').and.returnValue(returnVal);
    spyOn(Login, 'changeView');
    spyOn(Login, 'getUser').and.returnValue('dummy');
    $controller('MainCtrl', {
      $scope: $scope,
      Login: Login,
      $mdSidenav: $mdSidenav
    });
  }));

  it('should have username defined', function () {
    expect($scope.username).toBe('dummy');
    expect(Login.getUser).toHaveBeenCalled();
  });
  it('should show side nav', function () {
    $scope.showSidenav();
    expect($mdSidenav).toHaveBeenCalledWith('left');
    expect(returnVal.open).toHaveBeenCalled();
  });
});
