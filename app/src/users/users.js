   (function () {
     'use strict';

      angular.module('userApp', ['ngMaterial'])
       .config(function($mdIconProvider, $mdThemingProvider){
         // Register the user `avatar` icons
            $mdIconProvider
              .defaultIconSet("app/assets/svg/avatars.svg", 128)
              .icon("menu", "app/assets/svg/menu.svg", 24);
              
              $mdThemingProvider.theme('default')
                          .primaryPalette('grey')
                          .accentPalette('red');

        });

   })();