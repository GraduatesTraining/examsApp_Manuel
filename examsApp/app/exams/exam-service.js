(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name exams.service:Exam
   *
   * @description
   *
   */
  angular
    .module('exams')
    .service('Exam', Exam);

  function Exam() {
    var self = this;
    self.subject = null;
    self.setSubject = function (subject) {
      self.subject = subject;
      return subject;
    };
    self.getSubject = function () {
      return self.subject;
    };
  }
}());
