/**
 * Created by Balyuk-D on 23.05.2017.
 */
import app from './app_main';

app.component("appCurrency",{
    templateUrl: './app_currency.tmpl.html',
    controller: function(currency_api){
        this.base_code = currency_api.get_base();
        this.base_buy = 0;
        this.base_sell = 0;
        this.rate = 0;
        this.count_buy = 0;
        this.count_sell = 0;

        this.check_rate = (buy,sell)=>{
            if(buy == 0 || buy == null){
                this.rate = 0
            } else if (sell == 0 || sell == null){
                this.rate = 0
            } else if (sell == buy){
                this.rate = 1;
            } else {
                currency_api.get_rate(buy, sell).then((a)=>{
                    this.rate = a
                    this.exchange();
                });
            }
        };

        this.exchange =()=>{
            this.count_sell = (this.count_buy * this.rate).toFixed(4);
        }
    }
});

app.service('currency_api',function($http){
   this.get_base = ()=>{
       let arr = [];

       $http.get("http://api.fixer.io/latest").then((data)=>{
           arr.push(data.data.base);

           for(let key in data.data.rates){
               arr.push(key);
           }

       });
       return arr
   };

   this.get_rate = (buy,sell)=>{
       return $http.get("http://api.fixer.io/latest?base="+buy).then((data)=>{
            return data.data.rates[sell];
       });
   }
});