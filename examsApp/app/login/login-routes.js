(function () {
  'use strict';

  angular
    .module('login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
        .state('login', {
            parent:'home',
            views:{
                'loginView@home':{
                    templateUrl: 'login/login.tpl.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login'    
                }
            }
        });
    //   .state('login', {
    //     url: '/login',
    //     templateUrl: 'login/login.tpl.html',
    //     controller: 'LoginCtrl',
    //     controllerAs: 'login'
    //   });
  }
}());
