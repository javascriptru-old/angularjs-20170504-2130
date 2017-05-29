let app = angular.module('myApp', []);

//ВОПРОС у сервисов свой this, чтобы использовать скоуп с контроллера, нужно передавать через переменные?
app.service('CurrencyConvertService', function () {
    var self = this;
    this.getResultConvert = function (value, selectFrom, selectTo, currencies, result, error) {
        if (!value || !selectFrom || !selectTo) {
            return error;
        }
        if (value && selectFrom && selectTo) {
            for (let key in currencies) {
                if (selectFrom == currencies[key].ccy) {
                    result = value * currencies[key].buy;
                }
                if (selectFrom == currencies[key].ccy) {
                    result = result / currencies[key].sale;
                }
            }
            return result;
        }
    }
});


app.component('currencyConvert', {
    templateUrl: './templates/currency-convert.tpl.html',
    controller: ['$http', 'CurrencyConvertService', function ($http, CurrencyConvertService) {

        this.currencies = {};

        var self = this;

        this.getCurrencies = function () {
            $http({
                method: 'GET',
                url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
            }).then(function (success) {
                self.currencies = success.data;
            }, function (data) {
                console.log("Invalid data returned");
            });
        }

        this.getCurrencies();


        this.resultInput = 'Result here..';

        this.doConvert = function () {
            this.result = '';
            this.error = 'Wrong data';
            this.resultInput = CurrencyConvertService.getResultConvert(this.value, this.selectCurrency, this.currencyResult, this.currencies, this.result, this.error);
        }

    }]
});


