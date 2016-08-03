var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Models;
        (function (Models) {
            "use strict";
            var SubCategory = (function (_super) {
                __extends(SubCategory, _super);
                function SubCategory(lab) {
                    _super.call(this);
                    this.label = lab;
                }
                return SubCategory;
            }(Models.Base));
            Models.SubCategory = SubCategory;
        })(Models = HotDeals.Models || (HotDeals.Models = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
