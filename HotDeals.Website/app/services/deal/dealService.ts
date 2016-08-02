module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IDealService {
    }
    export class DealService extends Services.BaseService implements IDealService  {
        constructor($http: ng.IHttpService) {
            super($http, "deals"); 
        }
        
    }

    angular.module('HotDeals').service('DealServ', DealService); 
}