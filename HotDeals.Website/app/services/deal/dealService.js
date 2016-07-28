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
            var DealService = (function (_super) {
                __extends(DealService, _super);
                function DealService($http) {
                    _super.call(this, $http, "deals");
                }
                return DealService;
            })(Services.BaseService);
            Services.DealService = DealService;
            angular.module('HotDeals').service('DealServ', DealService);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=dealService.js.map