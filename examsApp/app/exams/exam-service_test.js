/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Exam', function () {
  var service;

  beforeEach(module('exams'));

  beforeEach(inject(function (Exam) {
    service = Exam;
  }));

  it('should have set and get subject', function () {
    expect(service.setSubject('dummy')).toBeDefined();
    expect(service.getSubject()).toBe('dummy');
  });
});
