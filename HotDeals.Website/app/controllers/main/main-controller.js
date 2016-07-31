/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var MainController = (function () {
            function MainController($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$scope.vm = {};
            }
            return MainController;
        })();
        HotDeals.MainController = MainController;
        angular.module('HotDeals').controller('MainCtrl', ['$scope', '$rootScope', MainController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=main-controller.js.map