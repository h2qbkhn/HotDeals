/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal; 

    export interface INewDealViewModel {
        categories: any; 
        subcategories: any; 
    }
    export interface INewDealScopeMethod {
        subcategoryChanged: () => void; 
        categoryChanged: () => void; 
    }

    export interface INewDealScope extends ng.IScope {
        vm: INewDealViewModel; 
        currentDeal: Deal;
        mt: INewDealScopeMethod 
    }

    export class NewDealController {
       
        constructor(private $scope: INewDealScope, private $q: ng.IQService,
            private $timeout: ng.ITimeoutService,private api: Services.Api) {
            this.$scope.vm = {
                categories: [], 
                subcategories: []
            }
            this.$scope.currentDeal = new Deal(); 

            this.$scope.mt = {
                categoryChanged : this.categoryChanged.bind(this),
                subcategoryChanged : this.subcategoryChanged.bind(this),
            } 

            this._init(); 
        }
        private _init(): ng.IPromise<any> {
            return this.$q.all([
                this._getAllCategories(), 
            ]).then(() => {
                this.$scope.currentDeal.categoryId = this.$scope.vm.categories[0].id; 
                var promises = []; 
                promises.push(this._getSubCategoriesByCategoryId(this.$scope.currentDeal.categoryId));
                return this.$q.all(promises);  
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

        private _getSubCategoriesByCategoryId(categoryId: string) {
            return this.api.subCategoryService.getSubCategoriesByCategoryId(categoryId).success((data) => {
                this.$scope.vm.subcategories = data; 
            })
        }
        
        public categoryChanged() {
            var that = this; 
            var currentCategoryId = that.$scope.currentDeal.categoryId;
            var promises = []; 
            promises.push(that._getSubCategoriesByCategoryId(currentCategoryId));
            return that.$q.all(promises)
                .then(() => {
                    if (that.$scope.vm.subcategories && that.$scope.vm.subcategories.length > 0) {
                        that.$scope.currentDeal.subcategoryId = that.$scope.vm.subcategories[0].id;
                    }
                })
        }
        public subcategoryChanged() {

        }
    }

    angular.module('HotDeals').controller('NewDealCtrl',['$scope','$q', '$timeout', 'Api',   NewDealController]);
}