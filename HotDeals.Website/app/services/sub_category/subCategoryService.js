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
            var SubCategoryService = (function (_super) {
                __extends(SubCategoryService, _super);
                function SubCategoryService($http) {
                    _super.call(this, $http, "subCategories");
                }
                SubCategoryService.prototype.getSubCategoriesByCategoryId = function (categoryId) {
                    return this.$http.get(HotDeals.Tools.apiServiceBaseUrl + this.name + '/search/', {
                        params: {
                            categoryId: categoryId
                        }
                    });
                };
                return SubCategoryService;
            }(Services.BaseService));
            Services.SubCategoryService = SubCategoryService;
            angular.module('HotDeals').service('SubCategoryServ', SubCategoryService);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=subCategoryService.js.map