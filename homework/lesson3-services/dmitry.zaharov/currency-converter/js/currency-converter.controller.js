(function () {
    'use strict';

    angular
        .module('app')
        .controller('CurrencyConverterController', CurrencyConverterController);

    CurrencyConverterController.$inject = ['currencyConverterService'];

    /* @ngInject */
    function CurrencyConverterController(currencyConverterService) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.allCurrencies = [];
            vm.topCurrencies = [];
            vm.fromCurrency = 'RUB';
            vm.fromCurrencyAmount = 0;
            vm.toCurrency = 'USD';
            vm.toCurrencyAmount = 0;
            
            vm.makeConvert = makeConvert;

            getCurrencies();
        }

        function getCurrencies() {
            currencyConverterService.currencies().then(function (resp) {
                vm.allCurrencies = resp[0].data;
                vm.topCurrencies = resp[1].data;
            }, function (err) {
                //
            });
        }
        
        function makeConvert() {
            currencyConverterService.convert(
                vm.fromCurrencyAmount,
                vm.fromCurrency,
                vm.toCurrency
            ).then(function (resp) {
                vm.toCurrencyAmount = resp.data;
            }, function (err) {
                //
            });
        }
    }

})();

