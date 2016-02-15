//'use strict';

//angular.module('core.landing', ['ngMaterial', 'junk', 'core.sidenav.landing']).config(function ($mdIconProvider, $mdThemingProvider) {    
//    $mdIconProvider
//                      .defaultIconSet("modules/core/client/img/junk/avatars.svg", 128)
//                      .icon("menu"       , "modules/core/client/img/junk/menu.svg"        , 24)
//                      .icon("share"      , "modules/core/client/img/junk/share.svg"       , 24)
//                      .icon("google_plus", "modules/core/client/img/junk/google_plus.svg" , 512)
//                      .icon("hangouts"   , "modules/core/client/img/junk/hangouts.svg"    , 512)
//                      .icon("twitter"    , "modules/core/client/img/junk/twitter.svg"     , 512)
//                      .icon("phone"      , "modules/core/client/img/junk/phone.svg"       , 512);
    
//    //$mdThemingProvider.theme('default')
//    //                  .primaryPalette('brown')
//    //                  .accentPalette('red');


//    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
//        'contrastDefaultColor': 'light',
//        'contrastDarkColors': ['50'],
//        '50': 'ffffff'
//    });
//    $mdThemingProvider.definePalette('customBlue', customBlueMap);
//    $mdThemingProvider.theme('default')
//    .primaryPalette('customBlue', {
//        'default': '500',
//        'hue-1': '50'
//    })
//    .accentPalette('pink');
//    $mdThemingProvider.theme('input', 'default')
//        .primaryPalette('grey')
//});



/*global angular */

(function () {
    'use strict';
    
    function configureCoreLanding($mdIconProvider, $mdThemingProvider) {
        
         $mdIconProvider
                              .defaultIconSet("modules/core/client/img/junk/avatars.svg", 128)
                              .icon("menu"       , "modules/core/client/img/junk/menu.svg"        , 24)
                              .icon("share"      , "modules/core/client/img/junk/share.svg"       , 24)
                              .icon("google_plus", "modules/core/client/img/junk/google_plus.svg" , 512)
                              .icon("hangouts"   , "modules/core/client/img/junk/hangouts.svg"    , 512)
                              .icon("twitter"    , "modules/core/client/img/junk/twitter.svg"     , 512)
                              .icon("phone"      , "modules/core/client/img/junk/phone.svg"       , 512);

        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
    .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');

       // var customPrimary = {
       //     '50': '#E3F2FD',
       //     '100': '#BBDEFB',
       //     '200': '#9FA8DA',
       //     '300': '#64B5F6',
       //     '400': '#42A5F5',
       //     '500': '#2196F3',
       //     '600': '#1E88E5',
       //     '700': '#1976D2',
       //     '800': '#1565C0',
       //     '900': '#0D47A1',
       //     'A100': '#82B1FF',
       //     'A200': '#448AFF',
       //     'A400': '#2979FF',
       //     'A700': '#2962FF'
       // };
       // $mdThemingProvider
       // .definePalette('customPrimary', 
       //                 customPrimary);
        
       // var customAccent = {
       //     '50': '#23ffd4',
       //     '100': '#0affcf',
       //     '200': '#00efc0',
       //     '300': '#00d6ac',
       //     '400': '#00bc97',
       //     '500': '#00a383',
       //     '600': '#00896f',
       //     '700': '#00705a',
       //     '800': '#005646',
       //     '900': '#003d31',
       //     'A100': '#3dffd9',
       //     'A200': '#56ffde',
       //     'A400': '#70ffe3',
       //     'A700': '#00231d'
       // };
       // $mdThemingProvider
       // .definePalette('customAccent', 
       //                 customAccent);
        
       // var customWarn = {
       //     '50': '#ffb280',
       //     '100': '#ffa266',
       //     '200': '#ff934d',
       //     '300': '#ff8333',
       //     '400': '#ff741a',
       //     '500': '#ff6400',
       //     '600': '#e65a00',
       //     '700': '#cc5000',
       //     '800': '#b34600',
       //     '900': '#993c00',
       //     'A100': '#ffc199',
       //     'A200': '#ffd1b3',
       //     'A400': '#ffe0cc',
       //     'A700': '#803200'
       // };
       // $mdThemingProvider
       // .definePalette('customWarn', 
       //                 customWarn);
        
       // var customBackground = {
       //     '50': '#737373',
       //     '100': '#666666',
       //     '200': '#595959',
       //     '300': '#4d4d4d',
       //     '400': '#404040',
       //     '500': '#333',
       //     '600': '#262626',
       //     '700': '#1a1a1a',
       //     '800': '#0d0d0d',
       //     '900': '#000000',
       //     'A100': '#808080',
       //     'A200': '#8c8c8c',
       //     'A400': '#999999',
       //     'A700': '#000000'
       // };
       // $mdThemingProvider
       // .definePalette('customBackground', 
       //                 customBackground);
        
       // $mdThemingProvider.theme('default')
       //.primaryPalette('light-blue')
       //.accentPalette('grey')
       //.warnPalette('light-blue')
       //.backgroundPalette('grey')

    }
    
    angular
        .module('core.landing')
        .config(['$mdIconProvider', '$mdThemingProvider', configureCoreLanding]);
})();