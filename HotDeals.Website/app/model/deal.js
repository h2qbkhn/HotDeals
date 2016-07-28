var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Models;
        (function (Models) {
            "use strict";
            var Deal = (function () {
                function Deal() {
                    this.title = "";
                    this.typeDealId = "";
                    this.categoryId = "";
                    this.subcaterogyId = "";
                    this.linkTo = "";
                    this.nameSeller = "";
                    this.srcImg = "";
                    this.price = null;
                    this.description = "";
                }
                return Deal;
            })();
            Models.Deal = Deal;
        })(Models = HotDeals.Models || (HotDeals.Models = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=deal.js.map