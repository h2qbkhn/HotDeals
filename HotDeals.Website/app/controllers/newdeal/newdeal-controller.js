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
        var Deal = HQHO.HotDeals.Models.Deal;
        var NewDealController = (function (_super) {
            __extends(NewDealController, _super);
            function NewDealController($scope, $q, $state, $timeout, api) {
                _super.call(this, $q, $state, $timeout, api);
                this.$scope = $scope;
                this.$scope.currentDeal = new Deal();
                this.$scope.mt = {
                    categoryChanged: this.categoryChanged.bind(this),
                    subcategoryChanged: this.subcategoryChanged.bind(this),
                    typedealChanged: this.typedealChanged.bind(this),
                    saveNewDeal: this.saveNewDeal.bind(this),
                };
                this.$scope.currentDeal.startDate = new Date(2014, 10, 9);
                this.$scope.currentDeal.endDate = new Date(2014, 10, 9);
                this._init();
            }
            NewDealController.prototype._init = function () {
                var that = this;
                return that.loadReferences()
                    .then(function () {
                    that.$scope.currentDeal.categoryId = that.categories[0].id;
                    var promises = [];
                    promises.push(that._getSubCategoriesByCategoryId(that.$scope.currentDeal.categoryId));
                    return that.$q.all(promises);
                }).then(function () {
                    that.$scope.currentDeal.typeDealId = that.typedeals[0].id;
                    that.$scope.currentDeal.subcategoryId = that.subcategories[0].id;
                })
                    .then(function () {
                    that.$scope.vm = {
                        categories: that.categories,
                        subcategories: that.subcategories,
                        typedeals: that.typedeals,
                    };
                });
            };
            NewDealController.prototype.typedealChanged = function () {
            };
            NewDealController.prototype.categoryChanged = function () {
                var that = this;
                var currentCategoryId = that.$scope.currentDeal.categoryId;
                var promises = [];
                promises.push(that._getSubCategoriesByCategoryId(currentCategoryId));
                return that.$q.all(promises)
                    .then(function () {
                    if (that.$scope.vm.subcategories && that.$scope.vm.subcategories.length > 0) {
                        that.$scope.currentDeal.subcategoryId = that.$scope.vm.subcategories[0].id;
                    }
                });
            };
            NewDealController.prototype.subcategoryChanged = function () {
            };
            NewDealController.prototype.saveNewDeal = function () {
                var that = this;
                var dealToAdd = this.$scope.currentDeal;
                dealToAdd.startDate = dealToAdd.startDate ? dealToAdd.startDate : new Date();
                dealToAdd.endDate = dealToAdd.endDate ? dealToAdd.endDate : new Date();
                dealToAdd.creationDate = dealToAdd.endDate ? dealToAdd.endDate : new Date();
                return that.api.dealService.addEntity(dealToAdd).success(function (data) {
                    that.$state.go("main.home");
                });
            };
            return NewDealController;
        })(HotDeals.BaseController);
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', ['$scope', '$q', '$state', '$timeout', 'Api', NewDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map