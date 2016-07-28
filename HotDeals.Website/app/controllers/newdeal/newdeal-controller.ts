/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface INewDealViewModel {
        
    }

    export interface INewDealScope extends ng.IScope {
        vm: INewDealViewModel
    }

    export class NewDealController {
        categories: any; 
        subcategories: any; 
        constructor(private $scope: INewDealScope, private api: Services.Api,
        private $q: ng.IQService) {
            this.$scope.vm = {
                
            }
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
            return this.api.categoryService.getAllEntities().success((data) => {
                this.categories = data;
            }); 
        }

        private _getAllSubCategories() {
            return this.api.subCategoryService.getAllEntities().success((data) => {
                this.subcategories = data;
            })
        }
    }

    angular.module('HotDeals').controller('NewDealCtrl',['$scope','Api',   NewDealController]);
}