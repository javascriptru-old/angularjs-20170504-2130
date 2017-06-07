(function () {
    'use strict';

    angular
        .module('app')
        .component('currencyConverter', currencyConverter());

    /* @ngInject */
    function currencyConverter() {
        var component = {
            controller: 'CurrencyConverterController',
            controllerAs: 'vm',
            templateUrl: 'js/currency-converter.tpl.html',
            bindings: {}
        };
        return component;
    }

})();

