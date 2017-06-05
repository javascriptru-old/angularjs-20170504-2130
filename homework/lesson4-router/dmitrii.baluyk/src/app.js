import './../node_modules/toastr/build/toastr.css';
import './app.css';
import './mails/mails.css';
import 'bootstrap';
import angular from 'angular';
import toastr from 'toastr';
import 'angular-ui-router';

var mails = require('./mails/mails.json');

let app = angular.module("mailApp",['ui.router']);

app.config(($stateProvider) => {

    $stateProvider.state({
        name: 'inbox',
        url: '/',
        template: '<mail-box></mail-box>'
    });

    $stateProvider.state({
        name: 'users',
        url: '/users',
        template: '<user-card></user-card>'
    });

    $stateProvider.state({
        name: 'about',
        url: '/user/:userId',
        template: '<about-user user="$ctrl.userId"></about-user>',
        controller: function($stateParams){
            this.userId = $stateParams.userId;
        },
        controllerAs: '$ctrl'
    });
})

/*------------------------------------------------MAIL----------------------------------------------------------------*/

app.component("mailBox",{
    templateUrl: './mails/mailbox.tmpl.html',
    controller: function($timeout, lettersApi){
        this.mails = mails.mails;
        this.limit_mails = 5;
        this.mails.forEach((a)=>{
            //a['id'] = randomId();
            a['time_start'] = Date.now();
        });

        lettersApi.getLetters().then((data)=>{
            data.forEach((a)=>{
                a['time_start'] = Date.now();
            });

            this.mails = data;
        })



        this.delete_mail = (id) => {
            /*Пока без удалений*/
            _.remove(this.mails,{"_id" : id});
        };

        /*Рандомные пиьма
        this.add_mail = (obj) =>{
            this.mails.unshift(obj);
        };

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
            });

            p1.then(()=>{
                this.funny_time();
            })
        };*/

        //this.funny_time();
    }
});

app.component("userMail",{
    bindings: {
        mail : "<",
        deleteMail : "&"
    },
    templateUrl: './mails/mail.tmpl.html',
    controller: function() {
        this.$onDestroy = function(){
            //empty
        };

        this.delete = (id,event) => {
            let time_life = new Date(Date.now() - this.mail.time_start).getSeconds();
            toastr.success('Time life mail: ' + time_life + 'secs');

            this.deleteMail({id: id});
        };
    }
});

app.service('lettersApi',function($http){
   this.getLetters = ()=>{
        return $http.get('http://test-api.javascript.ru/v1/dmitrii.baluyk/letters').then((data)=>{
            return data.data
        })
   };

   this.removeLetter = (id)=>{
       return $http.delete('http://test-api.javascript.ru/v1/dmitrii.baluyk/letters/'+id).then((data)=>{
           console.log("Delete OK")
       })
   };

});

/*-----------------------------------------------//-------------------------------------------------------------------*/
/*--------------------------------------------USERS-------------------------------------------------------------------*/

app.component("userCard",{
    templateUrl: "./users/user-card.tmpl.html",
    controller: function (userApi) {
        this.users = [];

        this.select_card = (user)=>{
            user.selected = !user.selected;
        }
        this.check_photo = (condion_cb, boolean_photo)=>{
            if(condion_cb){
                return boolean_photo
            }
            return true
        }

        userApi.getUsers().then((data)=>{
            this.users = data
        })

    }
});

app.component("avatarCard",{
    bindings: {
        picture: '<'
    },
    template: '<img ng-src="{{$ctrl.picture}}" style="width: 100%;">',
    controller: function(){
        //Empty
    }
});

app.component("aboutUser",{
    bindings: {
        user: '<'
    },
    template: `<div class="panel panel-info ">
        <div class="panel panel-heading">
            <h3 class="panel-title">{{$ctrl.user_.fullName}}</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-9 col-md-9 col-lg-9 ">
                    <table class="table table-user-information">
                        <tbody>
                        <tr><td>Дата рождения</td><td>{{$ctrl.user_.birthday || 'Not found'}}</td></tr>
                        <tr><td>Пол</td><td>{{$ctrl.user_.male || 'Not found'}}</td></tr>
                        <tr><td>Адрес</td><td>{{$ctrl.user_.adress || 'Not found'}}</td></tr>
                        <tr><td>Email</td><td><a href="mailto:{{$ctrl.user_.email}}">{{$ctrl.user_.email}}</a></td>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3 ">
                    <avatar-card picture="$ctrl.user_.avatarUrl"></avatar-card>
                </div>
            </div>
        </div>
        <div class="panel-footer">
        </div>
    </div>`,

    controller: function (userApi) {
        this.$onInit = function(){
           userApi.getUser(this.user).then((data)=>{
               this.user_ = data;
           })
        }
    }
});

app.service('userApi',function($http){
    this.getUsers = ()=>{
        return $http.get('http://test-api.javascript.ru/v1/dmitrii.baluyk/users/').then((data)=>{
            return data.data
        });
    }

    this.getUser = (id)=>{
        return $http.get('http://test-api.javascript.ru/v1/dmitrii.baluyk/users/'+id).then((data)=>{
            return data.data
        })
    }
});

/*-----------------------------------------------//-------------------------------------------------------------------*/
/*Other functions*/

function randomId(){
    return String.fromCharCode(randomInteger(1,10000))+randomInteger(1,20);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}