module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IApi {
        dealService: Services.DealService; 
        subCategoryService: Services.SubCategoryService; 
        categoryService: Services.CategoryService; 
    }

    export class Api implements IApi {
        constructor(
            public dealService: Services.DealService, 
            public subCategoryService: Services.SubCategoryService ,
            public categoryService: Services.CategoryService
        ) {
        }

    }
    angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', 'CategoryServ', Api])
}