/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;
    import TypeDeal = HQHO.HotDeals.Models.TypeDeal;

    import ETypeDeal = HQHO.HotDeals.Enums.ETypeDeal;

    export interface IDetailDealViewModel extends IBaseViewModel {

    }
    export interface IDetailDealScopeMethod extends IBaseScopeMethod {
       
    }
    export interface IDetailDealScope extends IBaseScope {
        currentDeal: Deal;
        poster: any; 
    }

    export class DetailDealController extends BaseController {
        constructor(private $scope: IDetailDealScope, $q: ng.IQService,
            $state, $timeout: ng.ITimeoutService, api: Services.Api, private dealId: string,
            private deal : any) {
            super($q, $state, $timeout, api);

            this.$scope.currentDeal = this.deal.data;
            this.$scope.mt = {
              
            }

            this.$scope.currentDeal.startDate = new Date(2014, 10, 9);
            this.$scope.currentDeal.endDate = new Date(2014, 10, 9);

            this._init();
        }
        private _init(): ng.IPromise<any> {
            var that = this;
            return that.loadReferences()
                .then(() => {
                   
                })         
        }
  }

    angular.module('HotDeals').controller('DetailDealCtrl', ['$scope', '$q', '$state',
        '$timeout', 'Api', 'dealId','deal', 
        DetailDealController]);
    //DetailDealController.$inject = ['$scope', '$q', '$state', '$timeout', 'Api', 'dealId', 'deal']; 
}