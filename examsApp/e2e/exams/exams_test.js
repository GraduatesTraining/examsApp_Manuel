/* global describe, beforeEach, it, browser, expect */
'use strict';

var ExamsPagePo = require('./exams.po');

describe('Exams page', function () {
  var examsPage;

  beforeEach(function () {
    examsPage = new ExamsPagePo();
    browser.get('/#/exams');
  });

  it('should say ExamsCtrl', function () {
    expect(examsPage.heading.getText()).toEqual('exams');
    expect(examsPage.text.getText()).toEqual('ExamsCtrl');
  });
});
