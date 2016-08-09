/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/typings/angularjs/angular-resource.d.ts"/>
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var UserController = (function () {
            function UserController($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$scope.mt = {};
                this.$scope.vm = {
                    menus: [
                        { name: 'Overview', icon: 'glyphicon-home' },
                        { name: 'Settings', icon: 'glyphicon-user' },
                        { name: 'Tasks', icon: 'glyphicon-ok' },
                        { name: 'Help', icon: 'glyphicon-flag' },
                    ],
                    selectedMenu: 0
                };
            }
            return UserController;
        })();
        HotDeals.UserController = UserController;
        angular.module('HotDeals').controller('UserCtrl', ['$scope', '$rootScope', UserController]);
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=user-controller.js.map