/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;
    import TypeDeal = HQHO.HotDeals.Models.TypeDeal; 
    import Category = HQHO.HotDeals.Models.Category; 
    import SubCategory = HQHO.HotDeals.Models.SubCategory; 

    export interface IBaseViewModel {
        categories: Array<Category>;
        subcategories: Array<SubCategory>;
        typedeals: Array<TypeDeal>;
    }
    export interface IBaseScopeMethod {
        
    }

    export interface IBaseScope extends ng.IScope {
        vm: IBaseViewModel;
        mt: IBaseScopeMethod;
        dateOptions: any;
    }

    export class BaseController {
        categories: Array<Category> = []; 
        subcategories: Array<SubCategory> = [];
        typedeals: Array<TypeDeal> = []; 
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