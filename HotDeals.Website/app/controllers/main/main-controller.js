/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var MainController = (function () {
            function MainController($scope, $rootScope, $uibModal) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$uibModal = $uibModal;
                this.$scope.animationForModalEnabled = false;
                this.$scope.mt = {
                    openLoginModal: this.openLoginModal.bind(this)
                };
                this.$scope.vm = {};
            }
            MainController.prototype.openLoginModal = function (size) {
                if (size === void 0) { size = ''; }
                var that = this;
                var modalInstance = that.$uibModal.open({
                    animation: that.$scope.animationForModalEnabled,
                    templateUrl: 'app/views/login/login.html',
                    controller: 'LoginCtrl',
                    size: size,
                    resolve: {}
                });
                modalInstance.result.then(function (selectedItem) {
                }, function () {
                });
            };
            ;
            return MainController;
        })();
        HotDeals.MainController = MainController;
        angular.module('HotDeals').controller('MainCtrl', ['$scope', '$rootScope', '$uibModal', MainController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
