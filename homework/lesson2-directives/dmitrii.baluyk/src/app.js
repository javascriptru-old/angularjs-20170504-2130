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
    controller: function($timeout){
        this.mails = mails.mails;
        this.limit_mails = 50;
        this.mails.forEach((a)=>{
            a['id'] = randomId();
            a['time_start'] = Date.now();
        });

        this.delete_mail = (id) => {
            //_.remove(this.mails,{"id" : id})
            this.mails.splice(0,1)
        }

        this.add_mail = (obj) =>{
            this.mails.unshift(obj);
        }

        this.funny_time = ()=> {
            let p1 = new Promise((res,rej)=>{
                $timeout(()=>{
                    let obj = mails.mails[randomInteger(0,5)];
                    obj['$$hashKey'] = 0;
                    obj['id'] = randomId();
                    obj['time_start'] = Date.now();
                    console.log(obj);
                    this.add_mail(obj);
                    res();
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

        this.delete = (id) => {
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