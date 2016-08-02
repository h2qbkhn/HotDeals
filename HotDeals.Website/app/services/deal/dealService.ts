module HQHO.HotDeals.Services {
    "use strict"; 
    import SearchPropertyDeal = HQHO.HotDeals.Models.SearchPropertyDeal; 
    export interface IDealService {
    }
    export class DealService extends Services.BaseService implements IDealService  {
        constructor($http: ng.IHttpService) {
            super($http, "deals"); 
        }

        public getAllEntitiesByProperties(searchPropertyDeal: SearchPropertyDeal) : ng.IHttpPromise<any>{
            if (searchPropertyDeal.categoryId == null && searchPropertyDeal.subCategoryId == null
            && searchPropertyDeal.typeDealId === null && searchPropertyDeal.typeLocation === null)
                return this.getAllEntities();
            else {
                return this.$http.get(Tools.apiServiceBaseUrl + this.name + '/search/', {
                    params: {
                        typeDealId: searchPropertyDeal.typeDealId, 
                        categoryId: searchPropertyDeal.categoryId,
                        subCategoryId: searchPropertyDeal.subCategoryId, 
                        typeLocation: searchPropertyDeal.typeLocation
                    }
                })
            }
        }
        
    }

    angular.module('HotDeals').service('DealServ', DealService); 
}