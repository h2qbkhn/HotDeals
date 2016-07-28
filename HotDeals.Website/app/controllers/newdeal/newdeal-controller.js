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
                    subcategories: []
                };
                this.$scope.newDeal = new Deal();
                this._init();
            }
            NewDealController.prototype._init = function () {
                return this.$q.all([
                    this._getAllCategories(),
                    this._getAllSubCategories()
                ]).then(function () {
                    console.info("ready");
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
            return NewDealController;
        })();
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', ['$scope', '$q', '$timeout', 'Api', NewDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map