/* global describe, beforeEach, it, expect, inject, module, spyOn */
'use strict';

describe('Login', function () {
  var service, state, localStorage;

  beforeEach(module('login'));

  beforeEach(inject(function (Login, $state, localStorageService) {
    service = Login;
    state = $state;
    localStorage = localStorageService;
    spyOn(state, 'go');
    spyOn(localStorage, 'get');
    spyOn(localStorage, 'set');
  }));

  it('should have getUser function defined and save username', function () {
    var test = {username: 'test'};
    service.setUser(test);
    expect(localStorage.set).toHaveBeenCalled();
  });
  it('should have getUser function defined and restore username', function () {
    service.getUser();
    expect(localStorage.get).toHaveBeenCalled();
  });
  it('should change the view with changeView function', function () {
    service.changeView('Test');
    expect(state.go).toHaveBeenCalledWith('Test');
  });
});
