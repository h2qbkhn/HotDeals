var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var UserService = (function (_super) {
                __extends(UserService, _super);
                function UserService($http) {
                    _super.call(this, $http, "users");
                }
                UserService.prototype.getUserById = function (userId) {
                    return this.$http.get(HotDeals.Tools.apiServiceBaseUrl + this.name, {
                        params: {
                            userId: userId
                        }
                    });
                };
                return UserService;
            })(Services.BaseService);
            Services.UserService = UserService;
            angular.module('HotDeals').service('UserServ', UserService);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=userService.js.map