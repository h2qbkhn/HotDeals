/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface IUserViewModel {
        menus: any[]; 
        selectedMenu: any; 
    }
   
    export interface IUserScopeMethod {
      
    }
    export interface IUserScope extends ng.IScope {
        vm: IUserViewModel;
        mt: IUserScopeMethod;
    }

    export class UserController {
        constructor(private $scope: IUserScope,
            private $rootScope: IHotDealsRootScope
            ) {
            this.$scope.mt = {
                
            }

            this.$scope.vm = {
                menus : [
                    {name: 'Overview', icon:'glyphicon-home'}, 
                    {name: 'Settings', icon:'glyphicon-user'}, 
                    { name: 'Tasks', icon: 'glyphicon-ok' }, 
                    { name: 'Help', icon: 'glyphicon-flag' }, 
                ], 
                selectedMenu : 0
            }


        }
    
    }

    angular.module('HotDeals').controller('UserCtrl', ['$scope', '$rootScope', UserController]);
}