/* global localStorage: false */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name login.service:Login
   *
   * @description
   */
  angular
    .module('login')
    .service('Login', Login);

  function Login() {
    var self = this;
    self.getUser = function () {
      return localStorage.username;
    };
    self.setUser = function (user) {
      localStorage.username = user.username;
    };
  }
}());
