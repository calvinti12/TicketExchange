(function () { 
    'use strict';
    angular.module('sidenav.landing').run(['Menus',
        function (Menus) {
            // Add the sidenav items
            Menus.addMenuItem('sidenav', {
                title: 'Business',
                state: 'home.business',
                icon: 'dashboard',
                roles: ['*']
            });
            Menus.addMenuItem('sidenav', {
                title: 'Help',
                state: 'home.help',
                icon: 'dashboard',
                roles: ['*']
            });
            Menus.addMenuItem('sidenav', {
                title: 'Settings',
                state: 'home.settings',
                icon: 'dashboard',
                roles: ['*']
            });
            
            //Add the admin panel items
            Menus.addMenuItem('sidenav', {
                title: 'Admin Panel 1',
                icon: 'dashboard',
                roles: ['admin']
            });
            Menus.addMenuItem('sidenav', {
                title: 'Admin Panel 2',
                icon: 'dashboard',
                roles: ['admin']
            });
        }
    ]);
})();