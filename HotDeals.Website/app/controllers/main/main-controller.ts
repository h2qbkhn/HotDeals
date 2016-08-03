/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
module HQHO.HotDeals {
    "use strict";
    export interface IMainViewModel {
        //TODO add members
    }
    export interface IHotDealsRootScope extends ng.IRootScopeService {
        today: () => void;
        clear: () => void;
        dt: Date;
        inlineOptions: any;
        dateOptions: any;
        toggleMin: () => void;
        open1: () => void;
        popup1: any;
        setDate: (year: number, month: number, day: number) => void;
        formats: string[];
        format: string;
        altInputFormats: string[];

        events: any;
    }

    export interface IMainScopeMethod {
        openLoginModal: (size: string) => {};
    }
    export interface IMainScope extends ng.IScope {
        vm: IMainViewModel;
        mt: IMainScopeMethod;
        animationForModalEnabled: boolean;
    }

    export class MainController {
        constructor(private $scope: IMainScope, private $rootScope: IHotDealsRootScope,
            private $uibModal) {
            this.$scope.animationForModalEnabled = false;
            this.$scope.mt = {
                openLoginModal: this.openLoginModal.bind(this)
            }

            this.$scope.vm = {

            }


        }

        public openLoginModal(size: string = '') {
            var that = this;
            var modalInstance = that.$uibModal.open({
                animation: that.$scope.animationForModalEnabled,
                templateUrl: 'app/views/login/login.html',
                controller: 'LoginCtrl',
                size: size,
                resolve: {

                }
            });
            modalInstance.result.then(function (selectedItem) {

            }, function () {

            });
        };
    }

    angular.module('HotDeals').controller('MainCtrl', ['$scope', '$rootScope', '$uibModal', MainController]);
}