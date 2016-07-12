var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var Api = (function () {
                function Api(dealService) {
                    this.dealService = dealService;
                }
                return Api;
            })();
            Services.Api = Api;
            angular.module('HotDeals').service('Api', ['DealServ', Api]);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=apiService.js.map