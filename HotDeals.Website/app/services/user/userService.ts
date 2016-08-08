module HQHO.HotDeals.Services {
    "use strict";
    export interface IUserService {

    }
    export class UserService extends Services.BaseService implements IUserService {
        constructor($http: ng.IHttpService) {
            super($http, "users");
        }
        public getUserById(userId: string): ng.IHttpPromise<any> {
            return this.$http.get(Tools.apiServiceBaseUrl + this.name, {
                params: {
                    userId: userId
                }

            })
        }
    }

    angular.module('HotDeals').service('UserServ', UserService);
}