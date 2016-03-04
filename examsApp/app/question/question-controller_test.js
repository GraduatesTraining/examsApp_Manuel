/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('QuestionCtrl', function () {
  var ctrl;

  beforeEach(module('question'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('QuestionCtrl');
  }));

  it('should have ctrlName as QuestionCtrl', function () {
    expect(ctrl.ctrlName).toEqual('QuestionCtrl');
  });
});
