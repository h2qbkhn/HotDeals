/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var HomeController = (function () {
            function HomeController($scope, api) {
                this.$scope = $scope;
                this.api = api;
                this.$scope.vm = {
                    deals: []
                };
                this._init();
            }
            HomeController.prototype._init = function () {
                var _this = this;
                this.api.dealService.getAllEntities().success(function (data) {
                    _this.$scope.vm.deals = data;
                });
            };
            return HomeController;
        })();
        HotDeals.HomeController = HomeController;
        angular.module('HotDeals').controller('HomeCtrl', ['$scope', 'Api', HomeController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=home-controller.js.map