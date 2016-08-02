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
        var Category = HQHO.HotDeals.Models.Category;
        var SubCategory = HQHO.HotDeals.Models.SubCategory;
        var TypeDeal = HQHO.HotDeals.Models.TypeDeal;
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController($scope, $q, $state, $timeout, api) {
                _super.call(this, $q, $state, $timeout, api);
                this.$scope = $scope;
                this.$scope.vm.deals = new Array();
                this.$scope.vm.filteredDeals = new Array();
                this.$scope.vm.searchPropertyDeal = {
                    categoryId: null,
                    subCategoryId: null,
                    typeDealId: null,
                    typeLocation: null
                };
                this;
                $scope.vm.searchTypeDeals = [];
                this;
                $scope.vm.searchSubCategories = [];
                this;
                $scope.vm.searchCategories = [];
                this.$scope.mt = {
                    searchPropertiesChanged: this.searchPropertiesChanged.bind(this)
                };
                this._init();
            }
            HomeController.prototype._init = function () {
                var that = this;
                return that.loadReferences().then(function () {
                    var promises = [];
                    promises.push(that.getAllEntities());
                    return that.$q.all(promises);
                })
                    .then(function () {
                    that.setupReferencesForSearch();
                    that.searchPropertiesChanged();
                });
            };
            HomeController.prototype.setupReferencesForSearch = function () {
                var that = this;
                that.$scope.vm.searchCategories.push(new Category("All"));
                that.categories.forEach(function (itm) {
                    that.$scope.vm.searchCategories.push(itm);
                });
                that.$scope.vm.searchSubCategories.push(new SubCategory("All"));
                that.subcategories.forEach(function (itm) {
                    that.$scope.vm.searchSubCategories.push(itm);
                });
                that.$scope.vm.searchTypeDeals.push(new TypeDeal(null, "All"));
                that.typedeals.forEach(function (itm) {
                    that.$scope.vm.searchTypeDeals.push(itm);
                });
            };
            HomeController.prototype._setupSubCategoriesForSearch = function () {
                var that = this;
                that.$scope.vm.searchSubCategories = [];
                that.$scope.vm.searchSubCategories.push(new SubCategory("All"));
                that.subcategories.forEach(function (itm) {
                    that.$scope.vm.searchSubCategories.push(itm);
                });
                that.$scope.vm.searchPropertyDeal.subCategoryId = null;
            };
            HomeController.prototype.getAllEntities = function () {
                var that = this;
                return that.api.dealService.getAllEntities().success(function (data) {
                    that.$scope.vm.deals = data;
                });
            };
            HomeController.prototype.searchPropertiesChanged = function () {
                var that = this;
                var promises = [];
                if (!that.$scope.vm.searchPropertyDeal.categoryId) {
                    that.$scope.vm.searchPropertyDeal.subcategoryId = null;
                }
                else {
                    promises.push(that._getSubCategoriesByCategoryId(that.$scope.vm.searchPropertyDeal.categoryId));
                }
                return that.$q.all(promises).then(function () {
                    that._setupSubCategoriesForSearch();
                    that.$scope.vm.filteredDeals = that.$scope.vm.deals.filter(function (itm) {
                        var searchPropertyDeal = that.$scope.vm.searchPropertyDeal;
                        if ((searchPropertyDeal.categoryId && itm.categoryId != searchPropertyDeal.categoryId)) {
                            return false;
                        }
                        if (searchPropertyDeal.typeDealId && itm.typeDealId != searchPropertyDeal.typeDealId) {
                            return false;
                        }
                        if (searchPropertyDeal.subCategoryId && itm.subcategoryId != searchPropertyDeal.subCategoryId) {
                            return false;
                        }
                        return true;
                    });
                });
            };
            return HomeController;
        })(HotDeals.BaseController);
        HotDeals.HomeController = HomeController;
        angular.module('HotDeals').controller('HomeCtrl', ['$scope', '$q', '$state', '$timeout', 'Api', HomeController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=home-controller.js.map