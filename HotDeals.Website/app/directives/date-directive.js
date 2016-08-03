var HQHO;
(function (HQHO) {
    var HotDeals;
    (function (HotDeals) {
        var Directives;
        (function (Directives) {
            "use strict";
            var DateInputWrapper = (function () {
                function DateInputWrapper() {
                    this.scope = {
                        model: "="
                    };
                    this.restrict = "E";
                    this.templateUrl = './app/directives/templates/date-input.html';
                    this.replace = true;
                    this.link = function (scope, element, attrs, ctrl) {
                        return new DateInputLinker(scope, element, attrs, ctrl);
                    };
                }
                DateInputWrapper.factory = function () {
                    var directive = function () { return new DateInputWrapper(); };
                    //const directive = ($location: ng.ILocationService, toaster: ToasterService) => new MyDirective($location, toaster);
                    directive.$inject = [];
                    return directive;
                };
                return DateInputWrapper;
            }());
            Directives.DateInputWrapper = DateInputWrapper;
            var DateInputLinker = (function () {
                function DateInputLinker(scope, element, attrs, ctrl) {
                    scope.today = function () {
                        var datenow = new Date();
                        scope.model = datenow;
                    };
                    scope.today();
                    scope.clear = function () {
                        scope.model = null;
                    };
                    scope.inlineOptions = {
                        customClass: getDayClass,
                        minDate: new Date(),
                        showWeeks: true
                    };
                    scope.dateOptions = {
                        dateDisabled: disabled,
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    };
                    function getDayClass(data) {
                        var date = data.date, mode = data.mode;
                        if (mode === 'day') {
                            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                            for (var i = 0; i < scope.events.length; i++) {
                                var currentDay = new Date(scope.events[i].date).setHours(0, 0, 0, 0);
                                if (dayToCheck === currentDay) {
                                    return scope.events[i].status;
                                }
                            }
                        }
                        return '';
                    }
                    function disabled(data) {
                        var date = data.date, mode = data.mode;
                        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                    }
                    scope.toggleMin = function () {
                        scope.inlineOptions.minDate = scope.inlineOptions.minDate ? null : new Date();
                        scope.dateOptions.minDate = scope.inlineOptions.minDate;
                    };
                    scope.toggleMin();
                    scope.open1 = function () {
                        scope.popup1.opened = true;
                    };
                    //scope.setDate = function (year, month, day) {
                    //    scope.model = new Date(year, month, day);
                    //};
                    scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                    scope.format = scope.formats[0];
                    scope.popup1 = {
                        opened: false
                    };
                }
                return DateInputLinker;
            }());
            Directives.DateInputLinker = DateInputLinker;
            angular.module('HotDeals').directive('hdDateInput', DateInputWrapper.factory());
        })(Directives = HotDeals.Directives || (HotDeals.Directives = {}));
    })(HotDeals = HQHO.HotDeals || (HQHO.HotDeals = {}));
})(HQHO || (HQHO = {}));
