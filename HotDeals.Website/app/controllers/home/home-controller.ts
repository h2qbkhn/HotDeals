/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict"; 
    export interface IHomeViewModel {
    }
    export interface IHomeScopeMethod {
        goToPageAdd: () => void; 
    }

    export interface IHomeScope  extends ng.IScope{
        vm: IHomeViewModel, 
        _: IHomeScopeMethod
    }

    export class HomeController {
        constructor(private $scope: IHomeScope) {
            this.$scope.vm = {
                
            }
            this.$scope._.goToPageAdd = function () {

            }
        }
    }

    angular.module('HotDeals').controller('HomeCtrl', HomeController); 
}