/* global describe, beforeEach, it, browser, expect */
'use strict';

var QuestionPagePo = require('./question.po');

describe('Question page', function () {
  var questionPage;

  beforeEach(function () {
    questionPage = new QuestionPagePo();
    browser.get('/#/question');
  });

  it('should say QuestionCtrl', function () {
    expect(questionPage.heading.getText()).toEqual('question');
    expect(questionPage.text.getText()).toEqual('QuestionCtrl');
  });
});
