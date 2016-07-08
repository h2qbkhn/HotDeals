module HQHO.HotDeals.Services {
    "use strict"; 
    export interface IApi {
        dealService : Services.DealService
    }

    export class Api implements IApi {
        constructor(
            public dealService: Services.DealService 
        ) { }

    }
    angular.module('HotDeals').service('Api', ['DealServ', Api])
}