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
                this.$scope.mt = {};
                this.$scope.vm = {};
            }
            return MainController;
        })();
        HotDeals.MainController = MainController;
        angular.module('HotDeals').controller('MainCtrl', ['$scope', '$rootScope', '$uibModal', MainController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=main-controller.js.map