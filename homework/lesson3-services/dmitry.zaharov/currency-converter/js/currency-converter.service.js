(function () {
    'use strict';

    angular
        .module('app')
        .service('currencyConverterService', currencyConverterService);

    currencyConverterService.$inject = ['$http', '$sce', '$q'];

    /* @ngInject */
    function currencyConverterService($http, $sce, $q) {
        var BASE_URL = 'http://api.exchangeratelab.com/api/';

        /* jshint -W040 */
        this.currencies = currencies;
        this.convert = convert;

        ////////////////

        function currencies() {
            return $q.all([
                _allCurrencies(),
                _topCurrencies()
            ]);
        }

        function convert(value, from, to) {
            return $http.jsonp($sce.trustAsResourceUrl(BASE_URL + 'current/' + from), {
                jsonpCallbackParam: 'callback',
                params: {
                    apikey: 'ACA1F309B560020BD1467F695ABC23EF'
                }
            }).then(function (resp) {
                var newValue = -1;
                var rates = resp.data.rates;
                rates.every(function (item) {
                    if (item.to === to) {
                        newValue = parseFloat((value / item.rate).toFixed(2));
                        return false;
                    }
                    return true;
                });
                resp.data = newValue;
                return $q.resolve(resp);
            });
        }

        function _allCurrencies() {
            return $http.jsonp($sce.trustAsResourceUrl(BASE_URL + 'currencies'), {
                jsonpCallbackParam: 'callback',
                params: {
                    apikey: 'ACA1F309B560020BD1467F695ABC23EF'
                }
            }).then(function (resp) {
                resp.data = resp.data.currencies.map(function (curr) {
                    return curr.currencyCode;
                });
                return $q.resolve(resp);
            });
        }

        function _topCurrencies() {
            return $http.jsonp($sce.trustAsResourceUrl(BASE_URL + 'current'), {
                jsonpCallbackParam: 'callback',
                params: {
                    apikey: 'ACA1F309B560020BD1467F695ABC23EF'
                }
            }).then(function (resp) {
                var rates = resp.data.rates;
                resp.data = rates.map(function (item) {
                    return item.to;
                });
                return $q.resolve(resp);
            });
        }
    }

})();

