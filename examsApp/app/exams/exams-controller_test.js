/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ExamsCtrl', function () {
  var ctrl;

  beforeEach(module('exams'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ExamsCtrl');
  }));

  it('should have ctrlName as ExamsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ExamsCtrl');
  });
});
