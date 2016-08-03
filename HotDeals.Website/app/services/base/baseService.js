var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Services;
        (function (Services) {
            "use strict";
            var BaseService = (function () {
                function BaseService($http, name) {
                    this.$http = $http;
                    this.name = name;
                }
                BaseService.prototype.getAllEntities = function () {
                    return this.$http.get(HotDeals.Tools.apiServiceBaseUrl + this.name);
                };
                BaseService.prototype.addEntity = function (entity, params) {
                    return this.$http.post(HotDeals.Tools.apiServiceBaseUrl + this.name, entity, params);
                };
                BaseService.prototype.getEntityById = function (id) {
                    return this.$http.get(HotDeals.Tools.apiServiceBaseUrl + this.name + '/detail/', {
                        params: {
                            dealId: id
                        }
                    });
                };
                return BaseService;
            }());
            Services.BaseService = BaseService;
        })(Services = HotDeals.Services || (HotDeals.Services = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
