(function () {
    'use strict';
    
    SidenavCtrl.$inject = ['$scope','$window','Authentication'];
    
    function SidenavCtrl($scope, $window, Authentication) {
        $scope.menu = [
            {
                link : 'home.business',
                title: 'Business',
                icon: 'dashboard'
            },
            {
                link : 'home.help',
                title: 'Help',
                icon: 'group'
            },
            {
                link : 'home.settings',
                title: 'Settings',
                icon: 'message'
            }
        ];
        $scope.admin = [
            {
                link : '',
                title: 'Trash',
                icon: 'delete'
            },
            {
                link : 'showListBottomSheet($event)',
                title: 'Settings',
                icon: 'settings'
            }
        ];
        $scope.authentication = Authentication;
        $scope.signOut = function () {
            $window.open('/api/auth/signout', '_self');
        }
    }
    angular.module('sidenav.landing').controller('SidenavCtrl', SidenavCtrl);
})();