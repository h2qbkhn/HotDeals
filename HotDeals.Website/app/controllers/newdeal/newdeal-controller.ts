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
        constructor(private $scope: INewDealScope, private api : Services.Api) {
            this.$scope.vm = {

            }
            this._init(); 
        }
        private  _init() {
            this.api.subCategoryService.getAllEntities().success((data) => {
                console.log(data); 
            })
        }
    }

    angular.module('HotDeals').controller('NewDealCtrl',['$scope','Api',   NewDealController]);
}