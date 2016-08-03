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
            var Deal = (function (_super) {
                __extends(Deal, _super);
                function Deal() {
                    _super.call(this);
                    this.title = "";
                    this.degree = null;
                    this.typeDealId = "";
                    this.typeDealLabel = "";
                    this.typeDealValue = null;
                    this.categoryId = "";
                    this.subcategoryId = "";
                    this.linkTo = "";
                    this.nameSeller = "";
                    this.addressSeller = "";
                    this.srcImg = "";
                    this.price = null;
                    this.oldPrice = null;
                    this.codeReduction = "";
                    this.description = "";
                    this.isOnline = 1;
                }
                return Deal;
            }(Models.Base));
            Models.Deal = Deal;
        })(Models = HotDeals.Models || (HotDeals.Models = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
