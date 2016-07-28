module HQHO.HotDeals.Services {
    "use strict";
    export interface ITypeDealService {

    }
    export class TypeDealService extends Services.BaseService implements ITypeDealService {
        constructor($http: ng.IHttpService) {
            super($http, "typedeals");
        }

    }

    angular.module('HotDeals').service('TypeDealServ', TypeDealService);
}