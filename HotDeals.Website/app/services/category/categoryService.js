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
            var CategoryService = (function (_super) {
                __extends(CategoryService, _super);
                function CategoryService($http) {
                    _super.call(this, $http, "categories");
                }
                return CategoryService;
            }(Services.BaseService));
            Services.CategoryService = CategoryService;
            angular.module('HotDeals').service('CategoryServ', CategoryService);
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
