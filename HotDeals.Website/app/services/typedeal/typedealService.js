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
            var TypeDealService = (function (_super) {
                __extends(TypeDealService, _super);
                function TypeDealService($http) {
                    _super.call(this, $http, "typedeals");
                }
                return TypeDealService;
            })(Services.BaseService);
            Services.TypeDealService = TypeDealService;
            angular.module('HotDeals').service('TypeDealServ', TypeDealService);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=typedealService.js.map