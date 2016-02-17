/*global angular */

(function () {
    'use strict';
    
    function configureStates($stateProvider) {
        $stateProvider
          .state('home.settings', {
            url: 'settings',
            title: 'Settings',
            templateUrl: 'modules/sidenav/client/views/settings.html'
            //controller: 'GoalsCtrl',
            //controllerAs: 'vm',
            //resolve: {
            //    initialData: [
            //        '$stateParams', 'adminInitialData', function ($stateParams, adminInitialData) {
            //            return adminInitialData.fetch($stateParams.id);
            //        }
            //    ]
            //},
            //data: {
            //    level: 1,
            //    needAdmin: true
            //}
        })
        .state('home.help', {
            url: 'help',
            templateUrl: 'modules/sidenav/client/views/help.html'
        })
        .state('home.business', {
            url: 'business',
            templateUrl: 'modules/sidenav/client/views/business.html'
        })
        .state('home.signup', {
            url: 'signup',
            templateUrl: 'modules/users/client/views/authentication/signup.client.view.html'
        })
        .state('home.signin', {
            url: 'signin',
            templateUrl: 'modules/users/client/views/authentication/signin.client.view.html'
        });
    }
    
    angular
        .module('sidenav.landing')
        .config(['$stateProvider', configureStates]);
})();