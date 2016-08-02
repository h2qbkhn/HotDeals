module HQHO.HotDeals.Services {
    "use strict"; 
    import SearchPropertyDeal = HQHO.HotDeals.Models.SearchPropertyDeal; 
    export interface IDealService {
    }
    export class DealService extends Services.BaseService implements IDealService  {
        constructor($http: ng.IHttpService) {
            super($http, "deals"); 
        }

        public getEntitiesByTypeDealId(typeDealId: string, isHot: boolean = true, maxNb :number = 10) : ng.IHttpPromise<any> {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name + '/search/', {
                params: {
                    typeDealId: typeDealId, 
                    isHot: isHot ? 1 : 0, 
                    maxNumber: maxNb
                }
            })
        }      
        
    }

    angular.module('HotDeals').service('DealServ', DealService); 
}