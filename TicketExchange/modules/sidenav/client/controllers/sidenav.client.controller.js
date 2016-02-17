(function () {
    'use strict';
    
    SidenavCtrl.$inject = ['$scope','$window','Authentication', 'Menus'];
    
    function SidenavCtrl($scope, $window, Authentication, Menus) {
        $scope.menu = Menus.getMenu('sidenav');
        $scope.authentication = Authentication;
        $scope.signOut = function () {
            $window.open('/api/auth/signout', '_self');
        };
    }
    angular.module('sidenav.landing').controller('SidenavCtrl', SidenavCtrl);
})();