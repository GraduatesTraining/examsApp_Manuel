/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Login', function () {
  var service;

  beforeEach(module('login'));

  beforeEach(inject(function (Login) {
    service = Login;
  }));

  it('should have getUser function defined', function () {
    expect(service.getUser).toBeDefined();
  });
  it('should have setUser function defined', function () {
    expect(service.setUser).toBeDefined();
  });
});
