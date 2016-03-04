/* global describe, beforeEach, it, expect, inject, module, spyOn */
'use strict';

describe('HomeCtrl', function () {
  var Login;
  beforeEach(module('login'));
  beforeEach(module('home'));
  beforeEach(inject(function ($rootScope, $controller, _Login_) {
    Login = _Login_;
    spyOn(Login, 'changeView');
    $controller('HomeCtrl', {
      Login: Login
    });
  }));
  it('should call to the changeView function', function () {
    expect(Login.changeView).toHaveBeenCalledWith('login');
  });
});
