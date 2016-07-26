module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IApi {
        dealService: Services.DealService; 
        subCategoryService: Services.SubCategoryService; 
    }

    export class Api implements IApi {
        constructor(
            public dealService: Services.DealService, 
            public subCategoryService: Services.SubCategoryService 
        ) {
        }

    }
    angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', Api])
}