/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;

    var app = angular.module("HotDeals", [
        "ui.router",
        "ui.bootstrap",
        "ui.utils",
        "ngResource",
        "angular-loading-bar",
        "ncy-angular-breadcrumb",
        "LocalStorageModule", 
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

    app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "cfpLoadingBarProvider",
        "$breadcrumbProvider", "$locationProvider","localStorageServiceProvider",
        function ($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider,
            $breadcrumbProvider, $locationProvider, localStorageServiceProvider
        ) {
            $breadcrumbProvider.setOptions({
                prefixStateName: "main.home",
                template: "bootstrap3"
            });

            $locationProvider.html5Mode(true).hashPrefix('!');

            var states = [];

            states.push({
                name: "main", controller: "MainCtrl",
                
                resolve: {
                   
                }, ncyBreadcrumb: { skip: true }
            });

            states.push({
                name: "login", controller: "LoginCtrl",url: "/login", templateUrl: "app/views/login/login.html",
                ncyBreadcrumb: { label: "login" }, resolve: {

                }

            });

           
            states.push({
                name: "home", controller: "HomeCtrl", url: "/home", templateUrl: "app/views/home/home.html",
                ncyBreadcrumb: { label: "Home" },
                resolve: {

                }
            });

            states.push({
                name: "newdeal", controller: "NewDealCtrl", url: "/newdeal", templateUrl: "app/views/newdeal/newdeal.html", ncyBreadcrumb: { label: "New deal" },
                resolve: {

                }
            });

            states.push({
                name: "user", controller: "UserCtrl", url: "/user/{userId}", templateUrl: "app/views/user/user.html",
                ncyBreadcrumb: { label: "User" },
                resolve: {
                   
                }
            });

            states.push({
                name: "detaildeal", controller: "DetailDealCtrl", url: "/detaildeal/{dealId}", templateUrl: "app/views/detaildeal/detaildeal.html", ncyBreadcrumb: { label: "Detail deal" },
                resolve: {
                    dealId: ['$stateParams', function ($stateParams) {
                        return $stateParams.dealId
                    }], 
                    deal: ['$stateParams', 'Api', function ($stateParams, api) {
                        return api.dealService.getEntityById($stateParams.dealId).success((data) => {
                            return data;
                        }) 
                    }]
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