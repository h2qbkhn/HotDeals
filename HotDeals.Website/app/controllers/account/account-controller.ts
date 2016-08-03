/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface IAccountViewModel {
    }
  
    export interface IAccountScopeMethod {
    }
    export interface IAccountScope extends ng.IScope {
        vm: IAccountViewModel;
        mt: IAccountScopeMethod;
    }

    export class AccountController {
        constructor(private $scope: IAccountScope, private $rootScope: IHotDealsRootScope,
        private $state) {
            this.$scope.mt = {
            }

            this.$scope.vm = {

            }
           
           
        }

      
    }

    angular.module('HotDeals').controller('AccountCtrl', ['$scope', '$rootScope','$state', AccountController]);
}