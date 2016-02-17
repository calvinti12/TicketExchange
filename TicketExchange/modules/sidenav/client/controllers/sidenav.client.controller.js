(function () {
    'use strict';
    
    SidenavCtrl.$inject = ['$scope','$window','Authentication', 'Menus'];
    
    function SidenavCtrl($scope, $window, Authentication, Menus) {
        //$scope.menu = [
        //    {
        //        link : 'home.business',
        //        title: 'Business',
        //        icon: 'dashboard'
        //    },
        //    {
        //        link : 'home.help',
        //        title: 'Help',
        //        icon: 'group'
        //    },
        //    {
        //        link : 'home.settings',
        //        title: 'Settings',
        //        icon: 'message'
        //    }
        //];
        //$scope.admin = [
        //    {
        //        link : '',
        //        title: 'Trash',
        //        icon: 'delete'
        //    },
        //    {
        //        link : 'showListBottomSheet($event)',
        //        title: 'Settings',
        //        icon: 'settings'
        //    }
        //];
        // Get the topbar menu
        $scope.menu = Menus.getMenu('sidenav');
        $scope.authentication = Authentication;
        $scope.signOut = function () {
            $window.open('/api/auth/signout', '_self');
        };
    }
    angular.module('sidenav.landing').controller('SidenavCtrl', SidenavCtrl);
})();