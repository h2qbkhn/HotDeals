/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var Deal = HQHO.HotDeals.Models.Deal;
        var NewDealController = (function () {
            function NewDealController($scope, $q, $timeout, api) {
                this.$scope = $scope;
                this.$q = $q;
                this.$timeout = $timeout;
                this.api = api;
                this.$scope.vm = {
                    categories: [],
                    subcategories: [],
                    typedeals: []
                };
                this.$scope.currentDeal = new Deal();
                this.$scope.dateOptions = {
                    dateDisabled: false,
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                };
                this.$scope.mt = {
                    categoryChanged: this.categoryChanged.bind(this),
                    subcategoryChanged: this.subcategoryChanged.bind(this),
                    typedealChanged: this.typedealChanged.bind(this),
                    saveNewDeal: this.saveNewDeal.bind(this),
                };
                this._init();
            }
            NewDealController.prototype._init = function () {
                var _this = this;
                return this.$q.all([
                    this._getAllTypeDeals(),
                    this._getAllCategories(),
                ]).then(function () {
                    _this.$scope.currentDeal.categoryId = _this.$scope.vm.categories[0].id;
                    var promises = [];
                    promises.push(_this._getSubCategoriesByCategoryId(_this.$scope.currentDeal.categoryId));
                    return _this.$q.all(promises);
                });
            };
            NewDealController.prototype._getAllTypeDeals = function () {
                var _this = this;
                return this.api.typedealService.getAllEntities().success(function (data) {
                    _this.$scope.vm.typedeals = data;
                });
            };
            NewDealController.prototype._getAllCategories = function () {
                var _this = this;
                return this.api.categoryService.getAllEntities().success(function (categories) {
                    _this.$scope.vm.categories = categories;
                });
            };
            NewDealController.prototype._getAllSubCategories = function () {
                var _this = this;
                return this.api.subCategoryService.getAllEntities().success(function (subcategories) {
                    _this.$scope.vm.subcategories = subcategories;
                });
            };
            NewDealController.prototype._getSubCategoriesByCategoryId = function (categoryId) {
                var _this = this;
                return this.api.subCategoryService.getSubCategoriesByCategoryId(categoryId).success(function (data) {
                    _this.$scope.vm.subcategories = data;
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
                return that.api.dealService.addEntity(dealToAdd).success(function (data) {
                });
            };
            return NewDealController;
        })();
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', ['$scope', '$q', '$timeout', 'Api', NewDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map