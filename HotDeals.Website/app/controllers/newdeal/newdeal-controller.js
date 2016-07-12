/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var NewDealController = (function () {
            function NewDealController($scope) {
                this.$scope = $scope;
                this.$scope.vm = {};
            }
            return NewDealController;
        })();
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', NewDealController);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map