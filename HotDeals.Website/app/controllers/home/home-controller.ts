/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal; 

    export interface IHomeViewModel {
        deals: Deal[]; 
    }
    export interface IHomeScopeMethod {
        goToPageAdd: () => void;
    }

    export interface IHomeScope extends ng.IScope {
        vm: IHomeViewModel,
    }

    export class HomeController {
        constructor(private $scope: IHomeScope, private api: Services.Api) {
            this.$scope.vm = {
                deals : []
            }
            this._init();
        }
        private _init() {
            this.api.dealService.getAllEntities().success((data) => {
               this.$scope.vm.deals = data; 
            })
        }


    }

    angular.module('HotDeals').controller('HomeCtrl', ['$scope', 'Api', HomeController]);
}