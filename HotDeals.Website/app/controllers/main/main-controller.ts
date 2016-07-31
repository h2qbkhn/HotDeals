/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface IMainViewModel {
        //TODO add members
    }
    export interface IHotDealsRootScope extends ng.IRootScopeService {
        today: () => void; 
        clear: () => void; 
        dt: Date; 
        inlineOptions: any; 
        dateOptions: any; 
        toggleMin: () => void; 
        open1: () => void; 
        popup1: any; 
        setDate: (year: number, month: number, day: number) => void;
        formats: string[]; 
        format: string; 
        altInputFormats: string[]; 

        events: any; 
    }
    export interface IMainScope extends ng.IScope {
        vm: IMainViewModel
    }

    export class MainController {
        constructor(private $scope: IMainScope, private $rootScope: IHotDealsRootScope) {
           
            this.$scope.vm = {

            }
        }
    }

    angular.module('HotDeals').controller('MainCtrl', ['$scope', '$rootScope', MainController]);
}