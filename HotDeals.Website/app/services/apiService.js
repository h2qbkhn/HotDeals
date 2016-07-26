var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var Api = (function () {
                function Api(dealService, subCategoryService) {
                    this.dealService = dealService;
                    this.subCategoryService = subCategoryService;
                }
                return Api;
            }());
            Services.Api = Api;
            angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', Api]);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=apiService.js.map