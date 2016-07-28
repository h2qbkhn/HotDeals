var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var Api = (function () {
                function Api(dealService, subCategoryService, categoryService) {
                    this.dealService = dealService;
                    this.subCategoryService = subCategoryService;
                    this.categoryService = categoryService;
                }
                return Api;
            })();
            Services.Api = Api;
            angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', 'CategoryServ', Api]);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=apiService.js.map