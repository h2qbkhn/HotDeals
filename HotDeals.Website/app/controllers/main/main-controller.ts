/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface IMainViewModel {
        //TODO add members
    }

    export interface IMainScope extends ng.IScope {
        vm: IMainViewModel
    }

    export class MainController {
        constructor(private $scope: IMainScope) {
            this.$scope.vm = {

            }
        }
    }

    angular.module('HotDeals').controller('MainCtrl', MainController);
}