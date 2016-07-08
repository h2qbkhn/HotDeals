module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IBaseService {
        getAllEntities: () => any; 
    }
    export class BaseService implements IBaseService {
        $http: ng.IHttpService; 
        public name: string; 
        constructor($http: ng.IHttpService, name) {
            this.$http = $http; 
            this.name = name; 
        }
        public getAllEntities(): any {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name); 
        }
    }

}