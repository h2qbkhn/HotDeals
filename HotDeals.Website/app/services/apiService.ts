module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IApi {
        dealService: Services.DealService; 
        subCategoryService: Services.SubCategoryService; 
        categoryService: Services.CategoryService; 
        typedealService: Services.TypeDealService; 
    }

    export class Api implements IApi {
        constructor(
            public dealService: Services.DealService, 
            public subCategoryService: Services.SubCategoryService ,
            public categoryService: Services.CategoryService, 
            public typedealService: Services.TypeDealService
        ) {
        }

    }
    angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', 'CategoryServ', 'TypeDealServ', Api])
}