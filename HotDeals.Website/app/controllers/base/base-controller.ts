/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;

    export interface IBaseViewModel {
        categories: any;
        subcategories: any;
        typedeals: any;
    }
    export interface IBaseScopeMethod {
        
    }

    export interface IBaseScope extends ng.IScope {
        vm: IBaseViewModel;
        mt: IBaseScopeMethod;
        dateOptions: any;
    }

    export class BaseController {
        categories: any = []; 
        subcategories: any = [];
        typedeals: any = []; 
        constructor(protected $q: ng.IQService,
            protected $state,
            protected $timeout: ng.ITimeoutService, protected api: Services.Api) {
             
        }
      
        public loadReferences(): ng.IPromise<any> {
            return this.$q.all([
                this._getAllTypeDeals(),
                this._getAllCategories(),
            ])
        }

        protected _getAllTypeDeals() {
            return this.api.typedealService.getAllEntities().success((data) => {
                this.typedeals = data;
            });
        }

        protected _getAllCategories() {
            return this.api.categoryService.getAllEntities().success((categories) => {
                this.categories = categories;
            });
        }

        protected _getAllSubCategories() {
            return this.api.subCategoryService.getAllEntities().success((subcategories) => {
                this.subcategories = subcategories;
            })
        }

        protected _getSubCategoriesByCategoryId(categoryId: string) {
            return this.api.subCategoryService.getSubCategoriesByCategoryId(categoryId).success((data) => {
                this.subcategories = data;
            })
        }
       
    }

    //angular.module('HotDeals').controller('NewDealCtrl', ['$scope', '$q', '$state', '$timeout', 'Api', NewDealController]);
}