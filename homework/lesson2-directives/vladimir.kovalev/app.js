
let app = angular.module('ngApp', ['ngMaterial']);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

app.component('appRoot', {
    template: '<mailbox></mailbox>',
});

app.component('mailbox', {
    templateUrl: 'mailbox.tpl.html',
    controller: function($http, $timeout){
        this.id = 0;
        this.emails = [];
        this.countOnPage = 5;
        this.currentPage = 0;
        this.selected = null;
        this.addEmail = function(email) {
            email.id = ++this.id;
            this.emails.push(email);
        };
        this.removeEmail = function (id) {
            if (confirm('Вы жействительно хотите удалить письмо ?')) {
                this.emails.forEach((item, i, arr)=>{
                    if (item.id === id) {
                        let now = new Date();
                        let lifetime = (now.getTime() - item.time.getTime()) / 1000;
                        console.log('Время жизни письма #' + id + ': ' + lifetime + ' секунд');
                        delete this.emails[i];
                    }
                });
                if ((this.selected) && (this.selected.id === id)) this.selected = null;
            }
        };
        this.$onInit = function() {
            let count = randomInteger(10, 50);
            $http.get('http://random.vkhs.ru/letters/'+count).then(
                (response) => {
                    response.data.forEach((item, i, arr)=>{
                        item.time = new Date(item.time*1000);
                        item.viewed = true;
                        this.addEmail(item);
                    });
                },
                (error) => {
                    console.log('Ошибка при обращении к http://random.vkhs.ru', error)
                }
            );
        };
        this.numberOfPages = function(){
            return Math.ceil(this.emails.length/this.countOnPage);
        };
        this.nextPage = function () {
           if (this.currentPage < this.numberOfPages()-1) {
               this.currentPage++;
           }
        };
        this.prevPage = function () {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        };
        this.selectEmail = function (email) {
            if (this.selected) {
                this.selected = (this.selected.id == email.id) ? null : email;
            } else {
                this.selected = email;
            }
            if (this.selected) {
                this.emails.forEach((item, i, arr)=>{
                    if (item.id === this.selected.id) {
                        this.emails[i].viewed = true;
                    }
                });
            }
        };
/*        this.recieveEmail = function() {
            return new Promise((resolve, reject)=>{
                let delay = randomInteger(3000, 8000);
                $timeout(()=>{
                    $http.get('http://random.vkhs.ru/letters/1').then(
                        (response) => {
                            response.data.forEach((item, i, arr)=>{
                                item.time = new Date();
                                item.viewed = false;
                                this.addEmail(item);
                            });
                            resolve();
                        },
                        (error) => {
                            console.log('Ошибка при обращении к http://random.vkhs.ru', error);
                            resolve();
                        }
                    );
                }, delay);
            }).then(this.recieveEmail.bind(this));
        };*/
        this.recieveEmail = function() {
            let delay = randomInteger(3000, 8000);
            $timeout(()=>{
                $http.get('http://random.vkhs.ru/letters/1').then(
                    (response) => {
                        response.data.forEach((item, i, arr)=>{
                            item.time = new Date();
                            item.viewed = false;
                            this.addEmail(item);
                        });
                    },
                    (error) => {
                        console.log('Ошибка при обращении к http://random.vkhs.ru', error);
                    }
                );
            }, delay).then(this.recieveEmail.bind(this));
        };
        this.recieveEmail();
    }
});

app.component('email', {
    templateUrl: 'email.tpl.html',
    bindings: {
        email: '<',
        delete: '&',
        select: '&',
        selected: '<',
    },
    controller: function () {
        this.class = function () {
            let c = 'vk-email';
            c = c + ((this.selected.id === this.email.id) ? ' vk-selected' : '');
            c = c + ((!this.email.viewed) ? ' vk-new' : '');
            return c;
        };
    }
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}