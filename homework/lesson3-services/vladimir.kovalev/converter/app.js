
let app = angular.module('ngApp', ['ngMaterial']);

app.component('converter', {
    templateUrl: 'converter.tpl.html',
    controller: ['convert', function(convert){
       this.$onInit = () => {
           this.fromValue = 1;
           convert.getCurList().then((data) => {this.curList = data;})
       };
       this.convert = () => this.result = Math.round(convert.convert(this.from, this.to, this.fromValue) * 1000) / 1000;
       this.fromCurChange = (currency) => {this.from = currency; this.convert();};
       this.toCurChange = (currency) => {this.to = currency; this.convert();};
    }]
});

app.component('currencyBox', {
    templateUrl: 'currencyBox.tpl.html',
    bindings: {
        label: '@',
        curList: '<',
        curSelect: '&'
    },
    controller: function() {
        this.$onInit = () => {
            this.currency = this.curList[0];
            this.changeCurrency();
        };
        this.changeCurrency = () => {
            this.curSelect({currency: this.currency});
        }
    }
});

app.service('convert', ['$http', function($http) {
    this.getCurList = ()=>
        $http.get('http://api.fixer.io/latest').then(response => {
            this.data = response.data;
            let result = [this.data.base];
            for (let key in  this.data.rates) {
                result.push(key);
            };
            return result;
            /*
            Вопрос: как это работает ?
            В контроллере мы вызываем ".then", значит здесь возвращаем "Promise".
            Но я не совсем понял где мы его тут возвращаем.
            Причём промис непростой, так как он запускает обновление модели angular.
            Если вернуть обычный промис (return new Promise()) - модель не обновляется (изменения не отображаются в DOM)
            * */
        });
    this.getValue = (currency) => {
        if (currency == this.data.base) return 1;
        return this.data.rates[currency];
    };
    this.convert = (from, to, value) => {
        return this.getValue(to) / this.getValue(from) * value;
    };
}]);