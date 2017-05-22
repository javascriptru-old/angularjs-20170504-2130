import './/../node_modules/toastr/build/toastr.css';
import './app.css';
import './mails.css';

var angular = require('angular'),
    bootstrap = require('bootstrap'),
    mails = require('./mails.json'),
    toastr = require('toastr');

let app = angular.module("mailApp",[]);

app.component("mailBox",{
    templateUrl: './mailbox.tmpl.html',
    controller: function($timeout, $http){
        this.mails = mails.mails;
        this.limit_mails = 10;
        this.mails.forEach((a)=>{
            a['id'] = randomId();
            a['time_start'] = Date.now();
        });

        this.delete_mail = (id) => {
            _.remove(this.mails,{"id" : id});
        }

        this.add_mail = (obj) =>{
            this.mails.unshift(obj);
        }

        this.funny_time = ()=> {
            let p1 = new Promise((res,rej)=>{
                $timeout(()=>{
                    $http.get('./mails.json').then((data)=>{
                        let obj = data.data.mails[randomInteger(0,4)];
                        obj['id'] = randomId();
                        obj['time_start'] = Date.now();
                        this.add_mail(obj);
                        res();
                    });
                },randomInteger(3,8)*1000)
            })

            p1.then(()=>{
                this.funny_time();
            })
        }

        this.funny_time();
    }
});

app.component("userMail",{
    bindings: {
        mail : "<",
        deleteMail : "&"
    },
    templateUrl: './mail.tmpl.html',
    controller: function() {
        this.$onDestroy = function(){
            let time_life = new Date(Date.now() - this.mail.time_start).getSeconds();
            toastr.success('Time life mail: ' + time_life + 'secs')
        };

        this.delete = (id,event) => {
            /*ВОПРОС АЛЯРМ!
            * Пока я не добавил event.preventDefault(), событие от клика всплывало куда то и обновляла страницу.
            * Причем! страница обновлялась только тогда, когда я удаляю тот же элемент на котором вызывалось это событие.
            * Например: допустим я вызываю удаления первого элемента в массиве, на 2 элементе странице(то бишь на другом элементе масива) страница не обновляеться,
            * как только я вызываю удаление первого элемента, на 1 элементе страницы, то она обновляеться.
            * Вопрос: Что это ? Как с этим бороться ?*/
            event.preventDefault();
            this.deleteMail({id: id});
        };
    }
});

function randomId(){
    return String.fromCharCode(randomInteger(1,10000))+randomInteger(1,20);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}