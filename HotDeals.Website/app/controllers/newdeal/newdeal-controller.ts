/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface INewDealViewModel {
        //TODO add members
    }

    export interface INewDealScope extends ng.IScope {
        vm: INewDealViewModel
    }

    export class NewDealController {
        constructor(private $scope: INewDealScope) {
            this.$scope.vm = {

            }
        }
    }

    angular.module('HotDeals').controller('NewDealCtrl', NewDealController);
}