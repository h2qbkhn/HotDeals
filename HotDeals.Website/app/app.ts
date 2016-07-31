/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module HQHO.HotDeals {
    "use strict";

    var app = angular.module("HotDeals", [
        "ui.router",
        "ui.bootstrap",
        "ui.utils",
        "ngResource",
        "angular-loading-bar",
        "ncy-angular-breadcrumb",
    ]);

    app.run(["$rootScope", ($rootScope) => {
        $rootScope.$on("cfpLoadingBar:started", () => {
            //disabled content
            $rootScope.isLoading = true;
        });
        $rootScope.$on("cfpLoadingBar:completed", () => {
            //enabled content
            $rootScope.isLoading = false;
        });
        
    }]);

    app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "cfpLoadingBarProvider", "$breadcrumbProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider, $breadcrumbProvider, $locationProvider) {
            $breadcrumbProvider.setOptions({
                prefixStateName: "main.home",
                template: "bootstrap3"
            });

            $locationProvider.html5Mode(true).hashPrefix('!');

            var states = [];

            states.push({
                name: "main", controller: "MainCtrl", templateUrl: "app/views/main/main.html",
                resolve: {
                   
                }, ncyBreadcrumb: { skip: true }
            });

            // home page
            states.push({
                name: "main.home", controller: "HomeCtrl", url: "/home", templateUrl: "app/views/home/home.html", ncyBreadcrumb: { label: "Home" },
                resolve: {
                    
                }
            });

            //new deal page
            states.push({
                name: "main.newdeal", controller: "NewDealCtrl", url: "/newdeal", templateUrl: "app/views/newdeal/newdeal.html", ncyBreadcrumb: { label: "New deal" },
                resolve: {

                }
            });
           
            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                if (state.name !== 'auth')
                    state.requireADLogin = true;
                $stateProvider.state(state.name, state);
            }
            $urlRouterProvider.otherwise("/home");
           
            cfpLoadingBarProvider.includeSpinner = false;

            
        }
    ]);
}