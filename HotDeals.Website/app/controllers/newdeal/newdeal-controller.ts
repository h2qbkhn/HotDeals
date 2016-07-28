/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal; 

    export interface INewDealViewModel {
        categories: any; 
        subcategories: any; 
    }

    export interface INewDealScope extends ng.IScope {
        vm: INewDealViewModel; 
        newDeal: Deal; 
    }

    export class NewDealController {
       
        constructor(private $scope: INewDealScope, private $q: ng.IQService,
            private $timeout: ng.ITimeoutService,private api: Services.Api) {
            this.$scope.vm = {
                categories: [], 
                subcategories: []
            }
            this.$scope.newDeal = new Deal(); 
            this._init(); 
        }
        private _init(): ng.IPromise<any> {
            return this.$q.all([
                this._getAllCategories(), 
                this._getAllSubCategories()
            ]).then(() => {
                console.info("ready");  
            });       
        }

        private _getAllCategories() {
            return this.api.categoryService.getAllEntities().success((categories) => {
                this.$scope.vm.categories = categories;
            }); 
        }

        private _getAllSubCategories() {
            return this.api.subCategoryService.getAllEntities().success((subcategories) => {
                this.$scope.vm.subcategories = subcategories;
            })
        }
    }

    angular.module('HotDeals').controller('NewDealCtrl',['$scope','$q', '$timeout', 'Api',   NewDealController]);
}