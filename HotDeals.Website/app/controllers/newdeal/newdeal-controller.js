/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var NewDealController = (function () {
            function NewDealController($scope, api, $q) {
                this.$scope = $scope;
                this.api = api;
                this.$q = $q;
                this.$scope.vm = {};
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
                return this.api.categoryService.getAllEntities().success(function (data) {
                    _this.categories = data;
                });
            };
            NewDealController.prototype._getAllSubCategories = function () {
                var _this = this;
                return this.api.subCategoryService.getAllEntities().success(function (data) {
                    _this.subcategories = data;
                });
            };
            return NewDealController;
        })();
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', ['$scope', 'Api', NewDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map