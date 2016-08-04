var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var Api = (function () {
                function Api(dealService, subCategoryService, categoryService, typedealService, loginService) {
                    this.dealService = dealService;
                    this.subCategoryService = subCategoryService;
                    this.categoryService = categoryService;
                    this.typedealService = typedealService;
                    this.loginService = loginService;
                }
                return Api;
            })();
            Services.Api = Api;
            angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', 'CategoryServ', 'TypeDealServ', 'LoginServ', Api]);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=apiService.js.map