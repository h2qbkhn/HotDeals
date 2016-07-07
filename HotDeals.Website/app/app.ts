/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
declare var tenant;
declare var clientId;

module Pathe.Capex {
    "use strict";


    var app = angular.module("HotDeals", [
        "ui.router",
        "agGrid",
        "ui.bootstrap",
        "ui.utils",
        "ngResource",
        "AdalAngular",
        "angular-loading-bar",
        "ncy-angular-breadcrumb",
        "toastr",
        "angucomplete-alt"
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

    app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "adalAuthenticationServiceProvider", "cfpLoadingBarProvider", "$breadcrumbProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $httpProvider, adalProvider, cfpLoadingBarProvider, $breadcrumbProvider, $locationProvider) {
            $breadcrumbProvider.setOptions({
                prefixStateName: "main.Home",
                template: "bootstrap3"
            });

            $locationProvider.html5Mode(true).hashPrefix('!');

            var states = [];

            states.push({
                name: "auth", url: "/auth", controller: "AuthController as vm", ncyBreadcrumb: { label: "Authentification" }
            });
            states.push({
                name: "unauthorized", controller: "UnauthorizedController", templateUrl: "app/views/unauthorized/index.html", ncyBreadcrumb: { label: "Unauthorized" }
            });
            states.push({
                name: "main", controller: "MainController", templateUrl: "app/views/main/main.html",
                resolve: {
                    init: ['Config', (config) => {
                        return config.init();
                    }]
                }, ncyBreadcrumb: { skip: true }
            });
            states.push({
                name: "main.Home", controller: "HomeController", url: "/home", templateUrl: "app/views/home/Index.html", ncyBreadcrumb: { label: "Accueil" },
                resolve: {
                    roleName: ($stateParams) => { return $stateParams.nameRole === undefined ? "" : $stateParams.nameRole; },
                    period: ($stateParams) => { return $stateParams.period === undefined ? "" : $stateParams.period; }
                }
            });
            states.push({
                name: "main.Reals", url: "/Reals?:id&:year?", templateUrl: "app/views/reel/Index.html", controller: "RealsController as vm",
                resolve: {
                    idCinema: ($stateParams) => { return $stateParams.id; },
                    year: ($stateParams) => { return $stateParams.year; }
                },
                ncyBreadcrumb: { label: "Réel" }
            });
            states.push({
                name: "main.Budgets", url: "/Budgets?:id&:year?", templateUrl: "app/views/budgets/Index.html", controller: "BudgetsController as vm",
                resolve: {
                    idCinema: ($stateParams) => { return $stateParams.id; }, year: ($stateParams) => { return $stateParams.year; }
                },
                ncyBreadcrumb: { label: "Budget" }
            });
            states.push({
                name: "main.ForecastsRevise", url: "/ForecastsRevise?:id&:year", templateUrl: "app/views/specialForecasts/index.html", controller: "SpecialForecastsController as vm",
                resolve: {
                    idCinema: ($stateParams) => { return $stateParams.id; },
                    year: ($stateParams) => { return $stateParams.year; },
                    isMensuel: () => { return false; }
                }, ncyBreadcrumb: { label: "Forecast Révisé" }
            });
            states.push({
                name: 'main.ForecastsMensuel', url: "/ForecastsMensuel?:id&:year", templateUrl: "app/views/specialForecasts/index.html", controller: "SpecialForecastsController as vm",
                resolve: {
                    idCinema: ($stateParams) => { return $stateParams.id; },
                    year: ($stateParams) => { return $stateParams.year; },
                    isMensuel: () => { return true; }
                },
                ncyBreadcrumb: { label: "Forecast Mensuel" }
            });
            states.push({
                name: "main.ForecastsMensuelEdit", url: "/ForecastsMensuelEdit?:id&:year&:month&:isMensuel&:read", templateUrl: "app/views/specialForecasts/edit.html", controller: "SpecialForecastsEditController as vm",
                resolve: {
                    idCinema: ($stateParams) => { return $stateParams.id; },
                    year: ($stateParams) => { return $stateParams.year; },
                    isMensuel: ($stateParams) => { return $stateParams.isMensuel; },
                    month: ($stateParams) => { return $stateParams.month; },
                    read: ($stateParams) => { return $stateParams.read; }
                },
                ncyBreadcrumb: {
                    parent: ($scope) => {
                        if ($scope.typeForecast === "Mensuel")
                            return "main.ForecastsMensuel";
                        return "main.ForecastsRevise";
                    },
                    label: "Forecast"
                }
            });
            states.push({
                name: "main.Rapports", url: "/Rapports?:id", templateUrl: "app/views/rapports/Index.html", controller: "RapportsController", resolve: { idCinema: ($stateParams) => { return $stateParams.id; } }, ncyBreadcrumb: { label: "Rapports" }
            });
            states.push({
                name: "main.Suivis", url: "/suivis?:year?&:id",
                templateUrl: "app/views/suivis/Index.html",
                controller: "SuivisController as vm",
                resolve: {
                    year: ($stateParams) => {
                        return $stateParams.year;
                    },
                    idCinema: ($stateParams) => {
                        return $stateParams.id;
                    }
                },

                ncyBreadcrumb: {
                    label: 'Suivis'
                }
            });
            states.push({
                name: "main.Administration", url: "/Administration",
                templateUrl: "app/views/administration/Index.html",

                ncyBreadcrumb: {
                    skip: true
                }
            });
            states.push({
                name: "main.Administration.list", url: "/list",
                templateUrl: "app/views/administration/list/Index.html",

                ncyBreadcrumb: {
                    label: "Administration"
                }
            });
            states.push({
                name: "main.Administration.cinema", url: "/cinema",
                templateUrl: "app/views/administration/cinemas/Index.html",
                controller: "AdministrationController as vm",
                resolve: {
                    state: () => {
                        return "cinema";
                    }
                },

                ncyBreadcrumb: {
                    parent: "main.Administration.list",
                    label: "Cinémas"
                }
            });
            states.push({
                name: "main.Administration.users", url: "/users", templateUrl: "app/views/administration/users/Index.html", controller: "AdministrationController as vm",
                resolve: {
                    state: ($stateParams) => {
                        return "user";
                    }
                },

                ncyBreadcrumb: {
                    parent: "main.Administration.list",
                    label: "Utilisateurs"
                }
            });
            states.push({
                name: "main.Administration.addUser", url: "/addUser", templateUrl: "app/views/administration/users/add.html", controller: "AdministrationController as vm",
                resolve: {
                    state: ($stateParams) => {
                        return "";
                    }
                },

                ncyBreadcrumb: {
                    label: "Ajout utilisateur"
                }
            });
            states.push({
                name: "main.Administration.period", url: "/period", templateUrl: "app/views/administration/period/Index.html", controller: "PeriodsController",
                ncyBreadcrumb: {
                    parent: "main.Administration.list",
                    label: "Gestion des périodes"
                }
            });
            states.push({
                name: "main.Administration.categories", url: "/categories", templateUrl: "app/views/administration/category/index.html", controller: "CategoriesController as vm",
                ncyBreadcrumb: {
                    parent: "main.Administration.list",
                    label: "Gestion des catégories, famillies et sous-familles"
                }
            });

            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                if (state.name !== 'auth')
                    state.requireADLogin = true;
                $stateProvider.state(state.name, state);
            }

            $urlRouterProvider.otherwise("/auth");

            var endpoints = {
                tenant: clientId
            };
            adalProvider.init({
                redirectUri: location.protocol + "//" + location.host + "/#/home",
                instance: "https://login.microsoftonline.com/",
                tenant: tenant,
                clientId: clientId,
                extraQueryParameter: "nux=1",
                endpoints: endpoints,
                cacheLocation: "localStorage"
            }, $httpProvider);

            cfpLoadingBarProvider.includeSpinner = false;
        }
    ]);
}