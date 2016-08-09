/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var BaseController = (function () {
            function BaseController($q, $state, $timeout, api) {
                this.$q = $q;
                this.$state = $state;
                this.$timeout = $timeout;
                this.api = api;
                this.categories = [];
                this.subcategories = [];
                this.typedeals = [];
            }
            BaseController.prototype.loadReferences = function () {
                return this.$q.all([
                    this._getAllTypeDeals(),
                    this._getAllCategories(),
                ]);
            };
            BaseController.prototype._getAllTypeDeals = function () {
                var _this = this;
                return this.api.typedealService.getAllEntities().success(function (data) {
                    _this.typedeals = data;
                });
            };
            BaseController.prototype._getAllCategories = function () {
                var _this = this;
                return this.api.categoryService.getAllEntities().success(function (categories) {
                    _this.categories = categories;
                });
            };
            BaseController.prototype._getAllSubCategories = function () {
                var _this = this;
                return this.api.subCategoryService.getAllEntities().success(function (subcategories) {
                    _this.subcategories = subcategories;
                });
            };
            BaseController.prototype._getSubCategoriesByCategoryId = function (categoryId) {
                var _this = this;
                return this.api.subCategoryService.getSubCategoriesByCategoryId(categoryId).success(function (data) {
                    _this.subcategories = data;
                });
            };
            return BaseController;
        })();
        HotDeals.BaseController = BaseController;
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=base-controller.js.map