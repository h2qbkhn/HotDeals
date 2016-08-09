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
            var User = (function (_super) {
                __extends(User, _super);
                function User() {
                    _super.call(this);
                    this.firstname = "";
                    this.lastname = null;
                }
                return User;
            })(Models.Base);
            Models.User = User;
        })(Models = HotDeals.Models || (HotDeals.Models = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=user.js.map