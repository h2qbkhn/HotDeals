/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var app = angular.module("HotDeals", [
            "ui.router",
            "ui.bootstrap",
            "ui.utils",
            "ngResource",
            "angular-loading-bar",
            "ncy-angular-breadcrumb",
        ]);
        app.run(["$rootScope", function ($rootScope) {
                $rootScope.$on("cfpLoadingBar:started", function () {
                    //disabled content
                    $rootScope.isLoading = true;
                });
                $rootScope.$on("cfpLoadingBar:completed", function () {
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
                    resolve: {}, ncyBreadcrumb: { skip: true }
                });
                // home page
                states.push({
                    name: "main.home", controller: "HomeCtrl", url: "/home", templateUrl: "app/views/home/home.html", ncyBreadcrumb: { label: "Home" },
                    resolve: {}
                });
                states.push({
                    name: "main.newdeal", controller: "NewDealCtrl", url: "/newdeal", templateUrl: "app/views/newdeal/newdeal.html", ncyBreadcrumb: { label: "New deal" },
                    resolve: {}
                });
                states.push({
                    name: "main.detaildeal", controller: "DetailDealCtrl", url: "/detaildeal/{dealId}", templateUrl: "app/views/detaildeal/detaildeal.html", ncyBreadcrumb: { label: "Detail deal" },
                    resolve: {
                        dealId: ['$stateParams', function ($stateParams) {
                                return $stateParams.dealId;
                            }],
                        deal: ['$stateParams', 'Api', function ($stateParams, api) {
                                return api.dealService.getEntityById($stateParams.dealId).success(function (data) {
                                    return data;
                                });
                            }]
                    }
                });
                states.push({
                    name: "main.account", controller: "AccountCtrl", url: "/Account/Login", templateUrl: "app/views/account/account.html", ncyBreadcrumb: { label: "Account" },
                    resolve: {}
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
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
