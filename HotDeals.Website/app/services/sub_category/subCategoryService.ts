module HQHO.HotDeals.Services {
    "use strict";
    export interface ISubCategoryService {

    }
    export class SubCategoryService extends Services.BaseService implements ISubCategoryService {
        constructor($http: ng.IHttpService) {
            super($http, "subCategories");
        }
    }

    angular.module('HotDeals').service('SubCategoryServ', SubCategoryService);
}