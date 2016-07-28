module HQHO.HotDeals.Services {
    "use strict";
    export interface ISubCategoryService {
        getSubCategoriesByCategoryId: (categoryId: string) => ng.IHttpPromise<any>; 
    }
    export class SubCategoryService extends Services.BaseService implements ISubCategoryService {
        constructor($http: ng.IHttpService) {
            super($http, "subCategories");
        }

        public getSubCategoriesByCategoryId(categoryId: string): ng.IHttpPromise<any> {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name + '/search/', {
                params: {
                    categoryId: categoryId
                }
            })
        }
    }

    angular.module('HotDeals').service('SubCategoryServ', SubCategoryService);
}