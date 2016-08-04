var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        "use strict";
        var Tools = (function () {
            function Tools() {
            }
            Tools.apiServiceBaseUrl = location.protocol + '//' + location.host + '/' + 'api/';
            Tools.redirectUriAuth = location.protocol + '//' + location.host + '/' + 'authcomplete.html';
            Tools.clientId = "hotdealsApp";
            return Tools;
        })();
        HotDeals.Tools = Tools;
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
//# sourceMappingURL=tools.js.map