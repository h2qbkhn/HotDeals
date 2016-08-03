module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IBaseService {
        getAllEntities: () => ng.IHttpPromise<any>; 
        getEntityById: (id: string) => ng.IHttpPromise<any>; 
    }
    export class BaseService implements IBaseService {
        $http: ng.IHttpService; 
        public name: string; 
        constructor($http: ng.IHttpService, name) {
            this.$http = $http; 
            this.name = name; 
        }
        public getAllEntities(): ng.IHttpPromise<any>  {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name); 
        }
        public addEntity(entity: any, params? : any): ng.IHttpPromise<any> {
            return this.$http.post(Tools.apiServiceBaseUrl + this.name, entity, params); 
        }
        public getEntityById(id: string): ng.IHttpPromise<any> {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name + '/detail/', {
                params: {
                    dealId: id
                }
            }); 
        }
    }

}