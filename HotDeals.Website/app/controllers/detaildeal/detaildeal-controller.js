var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var DetailDealController = (function (_super) {
            __extends(DetailDealController, _super);
            function DetailDealController($scope, $q, $state, $timeout, api, dealId, deal) {
                _super.call(this, $q, $state, $timeout, api);
                this.$scope = $scope;
                this.dealId = dealId;
                this.deal = deal;
                this.$scope.currentDeal = this.deal.data;
                this.$scope.mt = {};
                this.$scope.currentDeal.startDate = new Date(2014, 10, 9);
                this.$scope.currentDeal.endDate = new Date(2014, 10, 9);
                this._init();
            }
            DetailDealController.prototype._init = function () {
                var that = this;
                return that.loadReferences()
                    .then(function () {
                });
            };
            return DetailDealController;
        })(HotDeals.BaseController);
        HotDeals.DetailDealController = DetailDealController;
        angular.module('HotDeals').controller('DetailDealCtrl', ['$scope', '$q', '$state',
            '$timeout', 'Api', 'dealId', 'deal',
            DetailDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=detaildeal-controller.js.map