/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;
    import Category = HQHO.HotDeals.Models.Category;
    import SubCategory = HQHO.HotDeals.Models.SubCategory;
    import TypeDeal = HQHO.HotDeals.Models.TypeDeal;
    import SearchPropertyDeal = HQHO.HotDeals.Models.SearchPropertyDeal;
    import ETypeDeal = HQHO.HotDeals.Enums.ETypeDeal;

    export interface IHomeViewModel extends IBaseViewModel {
        deals: Array<Deal>;
        filteredDeals: Array<Deal>;
        hotCodePromos: Array<Deal>;
        hotFrees: Array<Deal>;
        hotBonPlans: Array<Deal>;
        searchPropertyDeal: any;
        searchCategories: Array<Category>;
        searchSubCategories: Array<SubCategory>;
        searchTypeDeals: Array<TypeDeal>;
    }
    export interface IHomeScopeMethod extends IBaseScopeMethod {
        searchPropertiesChanged: () => void;
    }

    export interface IHomeScope extends IBaseScope {
        vm: any,
        mt: IHomeScopeMethod,
    }

    export class HomeController extends BaseController {
        constructor(private $scope: IHomeScope, $q: ng.IQService,
            $state, $timeout: ng.ITimeoutService, api: Services.Api) {
            super($q, $state, $timeout, api);
            this.$scope.vm = {}; 
            this.$scope.vm.deals = new Array<Deal>();
            this.$scope.vm.filteredDeals = new Array<Deal>();

            this.$scope.vm.hotCodePromos = new Array<Deal>();
            this.$scope.vm.hotFrees = new Array<Deal>();
            this.$scope.vm.hotBonPlans = new Array<Deal>();

            this.$scope.vm.searchPropertyDeal = {
                categoryId: null,
                subCategoryId: null,
                typeDealId: null,
                typeLocation: null
            };
            this; $scope.vm.searchTypeDeals = [];
            this; $scope.vm.searchSubCategories = [];
            this; $scope.vm.searchCategories = [];

            this.$scope.mt = {
                searchPropertiesChanged: this.searchPropertiesChanged.bind(this) 
            }
            this._init();
        }
        private _init() {
            var that = this;
            return that.loadReferences().then(() => {
                var promises = [];
                promises.push(that.getAllEntities());
                return that.$q.all(promises);
            }).then(() => {
                var promises = [];
                that.typedeals.forEach((itm, index) => {
                    promises.push(that.getHotDeals(itm.id, itm.value));
                })
                return that.$q.all(promises);
            })
                .then(() => {
                    that.setupReferencesForSearch();
                    that.searchPropertiesChanged();
                })
        }

        public getHotDeals(typeDealId: string, value: number) {
            var that = this;
            return that.api.dealService.getEntitiesByTypeDealId(typeDealId, true, 10).success((data) => {
                if (value === ETypeDeal.BonPlan)
                    that.$scope.vm.hotBonPlans = data;
                if (value === ETypeDeal.CodePromo)
                    that.$scope.vm.hotCodePromos = data;
                if (value === ETypeDeal.Free)
                    that.$scope.vm.hotFrees = data;
            })
        }

        public setupReferencesForSearch() {
            var that = this;
            that.$scope.vm.searchCategories.push(new Category("All"));
            that.categories.forEach((itm) => {
                that.$scope.vm.searchCategories.push(itm);
            })

            that.$scope.vm.searchSubCategories.push(new SubCategory("All"));
            that.subcategories.forEach((itm) => {
                that.$scope.vm.searchSubCategories.push(itm);
            })

            that.$scope.vm.searchTypeDeals.push(new TypeDeal(null, "All"));
            that.typedeals.forEach((itm) => {
                that.$scope.vm.searchTypeDeals.push(itm);
            })
        }

        private _setupSubCategoriesForSearch() {
            var that = this;
            that.$scope.vm.searchSubCategories = [];
            that.$scope.vm.searchSubCategories.push(new SubCategory("All"));
            that.subcategories.forEach((itm) => {
                that.$scope.vm.searchSubCategories.push(itm);
            })
            that.$scope.vm.searchPropertyDeal.subCategoryId = null;
        }

        public getAllEntities(): ng.IHttpPromise<any> {
            var that = this;
            return that.api.dealService.getAllEntities().success((data) => {
                that.$scope.vm.deals = data;
            })
        }
        public searchPropertiesChanged() {
            var that = this;
            var promises = [];

            if (!that.$scope.vm.searchPropertyDeal.categoryId) {
                that.$scope.vm.searchPropertyDeal.subcategoryId = null;
            } else {
                promises.push(that._getSubCategoriesByCategoryId(that.$scope.vm.searchPropertyDeal.categoryId));
            }
            return that.$q.all(promises).then(() => {
                that._setupSubCategoriesForSearch();
                that.$scope.vm.filteredDeals = that.$scope.vm.deals.filter((itm) => {
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
                })
            });

        }

    }

    angular.module('HotDeals').controller('HomeCtrl', ['$scope', '$q', '$state', '$timeout', 'Api', HomeController]);
}