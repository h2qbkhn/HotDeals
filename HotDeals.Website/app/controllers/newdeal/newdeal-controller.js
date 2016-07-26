/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var NewDealController = (function () {
            function NewDealController($scope, api) {
                this.$scope = $scope;
                this.api = api;
                this.$scope.vm = {};
                this._init();
            }
            NewDealController.prototype._init = function () {
                this.api.subCategoryService.getAllEntities().success(function (data) {
                    console.log(data);
                });
            };
            return NewDealController;
        }());
        HotDeals.NewDealController = NewDealController;
        angular.module('HotDeals').controller('NewDealCtrl', ['$scope', 'Api', NewDealController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=newdeal-controller.js.map