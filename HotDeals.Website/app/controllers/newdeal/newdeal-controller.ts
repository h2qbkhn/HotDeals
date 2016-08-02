﻿/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    import Deal = HQHO.HotDeals.Models.Deal;
    import TypeDeal = HQHO.HotDeals.Models.TypeDeal;

    import ETypeDeal = HQHO.HotDeals.Enums.ETypeDeal;

    export interface INewDealViewModel extends IBaseViewModel {

    }
    export interface INewDealScopeMethod extends IBaseScopeMethod {
        subcategoryChanged: () => void;
        categoryChanged: () => void;
        typedealChanged: () => void;
        saveNewDeal: () => void;
        isCodePromo: () => boolean; 
        isFree: () => boolean; 
        isBonPlan: () => boolean; 
    }

    export interface INewDealScope extends IBaseScope {
        currentDeal: Deal;
    }

    export class NewDealController extends BaseController {
        public selectedTypeDeal: TypeDeal;
        constructor(private $scope: INewDealScope, $q: ng.IQService,
            $state, $timeout: ng.ITimeoutService, api: Services.Api) {
            super($q, $state, $timeout, api);

            this.$scope.currentDeal = new Deal();
            this.$scope.mt = {
                categoryChanged: this.categoryChanged.bind(this),
                subcategoryChanged: this.subcategoryChanged.bind(this),
                typedealChanged: this.typedealChanged.bind(this),
                saveNewDeal: this.saveNewDeal.bind(this),

                isCodePromo : this.isCodePromo.bind(this), 
                isBonPlan : this.isBonPlan.bind(this), 
                isFree: this.isFree.bind(this), 
            }

            this.$scope.currentDeal.startDate = new Date(2014, 10, 9);
            this.$scope.currentDeal.endDate = new Date(2014, 10, 9);

            this._init();
        }
        private _init(): ng.IPromise<any> {
            var that = this;
            return that.loadReferences()
                .then(() => {
                    that.$scope.currentDeal.categoryId = that.categories[0].id;
                    var promises = [];
                    promises.push(that._getSubCategoriesByCategoryId(that.$scope.currentDeal.categoryId));
                    return that.$q.all(promises);
                }).then(() => {
                    that.$scope.currentDeal.typeDealId = that.typedeals[0].id;
                    that.typedealChanged(); 
                    that.$scope.currentDeal.subcategoryId = that.subcategories[0].id;
                })
                .then(() => {
                    that.$scope.vm = {
                        categories: that.categories,
                        subcategories: that.subcategories,
                        typedeals: that.typedeals,
                    }
                });
        }

        private _isFormValid() {
            var that = this;
            return !that.$scope['newdeal_form']['$invalid'];
        }

        public isCodePromo() {
            return this.$scope.currentDeal.typeDealValue === ETypeDeal.CodePromo; 
        }
        public isFree() {
            return this.$scope.currentDeal.typeDealValue = ETypeDeal.Free; 
        }
        public isBonPlan() {
            return this.$scope.currentDeal.typeDealValue = ETypeDeal.BonPlan; 
        }

        public typedealChanged() {
            var that = this;
            var found = that.typedeals.filter((itm) => {
                return itm.id === that.$scope.currentDeal.typeDealId;
            });
            that.$scope.currentDeal.typeDealLabel = found[0].label;
            that.$scope.currentDeal.typeDealValue = found[0].value;
            
        }

        public categoryChanged() {
            var that = this;
            var currentCategoryId = that.$scope.currentDeal.categoryId;
            var promises = [];
            promises.push(that._getSubCategoriesByCategoryId(currentCategoryId));
            return that.$q.all(promises)
                .then(() => {
                    if (that.subcategories && that.subcategories.length > 0) {
                        that.$scope.vm.subcategories = that.subcategories;
                        that.$scope.currentDeal.subcategoryId = that.subcategories[0].id;
                    }
                })

        }
        public subcategoryChanged() {

        }

        public saveNewDeal() {
            var that = this;
            if (!that._isFormValid()) return;
            var dealToAdd = this.$scope.currentDeal;
            dealToAdd.creationDate = dealToAdd.endDate ? dealToAdd.endDate : new Date();
            return that.api.dealService.addEntity(dealToAdd).success((data) => {
                that.$state.go("main.home");
            })
        }

    }

    angular.module('HotDeals').controller('NewDealCtrl', ['$scope', '$q', '$state', '$timeout', 'Api', NewDealController]);
}