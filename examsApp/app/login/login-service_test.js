/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Login', function () {
  var service;

  beforeEach(module('login'));

  beforeEach(inject(function (Login) {
    service = Login;
  }));

  it('should equal Login', function () {
    expect(service.get()).toEqual('Login');
  });
});
