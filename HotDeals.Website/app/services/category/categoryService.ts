module HQHO.HotDeals.Services {
    "use strict";
    export interface ICategoryService {

    }
    export class CategoryService extends Services.BaseService implements ICategoryService {
        constructor($http: ng.IHttpService) {
            super($http, "categories");
        }
    }

    angular.module('HotDeals').service('CategoryServ', CategoryService);
}