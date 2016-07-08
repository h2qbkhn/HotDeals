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
    }

    export class HomeController {
        constructor(private $scope: IHomeScope, private api : Services.Api) {
            this.$scope.vm = {
                
            }
            this._init();   
        }
        private _init() {
            this.api.dealService.getAllEntities().success((data) => {
                console.log(data); 
            })
        }

      
    }

    angular.module('HotDeals').controller('HomeCtrl', ['$scope','Api',HomeController]); 
}