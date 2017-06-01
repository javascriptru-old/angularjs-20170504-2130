let app = angular.module('myApp', ['ngSanitize']);


app.component('mailList', {
    templateUrl: './templates/maillist.tpl.html',
    bindings: {
        mails: "<"
    },
    controller: function ($http, $interval, $sce) {
        this.loadTime = performance.now();

        this.mails = {};
        this.letter = {};
        var data = {};

        var self = this;

        this.getMails = function () {
            this.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }
            let url = "http://test-api.javascript.ru/v1/yloboda/letters";
            $http({
                method: 'GET',
                url: this.trustSrc(url),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (success) {
                self.mails = success.data;
            }, function (data) {
                console.log("Invalid data returned");
            });
        };


        this.generateLetter = function () {
            this.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }
            let url = "http://random.vkhs.ru/letters/1";
            $http({
                method: 'GET',
                url: this.trustSrc(url),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (success) {
                data = success.data[0];
                self.addLetter();
            }, function (data) {
                console.log("Invalid data returned");
            });
        }

        this.newMail = '111';


        this.addLetter = function () {
            let url = 'http://test-api.javascript.ru/v1/yloboda/letters';
            $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: data,
                transformRequest: function (obj) {
                    let str = '';
                    for (var key in obj) {
                        str = 'subject=' + obj['title'] + '&body=' + obj['body'] + '&to=' + obj['email'] + '&mailbox=592c7ce755fc9c1d04587f9e'
                    }
                    return str;
                }
            }).then(function (success) {
                self.mails.unshift(success.data);

                //Add active class
                self.getSelected = function(index) {
                    self.selected = index._id;
                    self.id = index._id;
                }

                self.id = success.data._id;


            }, function (data, status) {
                console.log("Invalid data returned");
                console.log(data);
            });


        };


        this.showNumber = function () {
            this.arr = [];
            for (let i = 0; i < this.mails.length; i = i + 5) {
                this.arr.push(i + 5);
            }
            return this.arr;
        }

        this.getNumber = function (num) {
            this.quantity = this.arr[num];
        }

        this.$onInit = function () {
            console.log('initializing controllers, setting default values');
            self.quantity = 5;
            self.getMails();
        };

        this.$onChanges = function (changes) {
            if (changes) {

                $interval(function () {

                    self.generateLetter();

                    console.log(self.mails.length);

                }, 10000);
            }
        };

        //ВОПРОС: НЕ работает $onDestroy
        this.$onDestroy = function (val) {
            alert('Destroy');
        };


        this.deleteMail = function (mail) {
            let index = this.mails.indexOf(mail);
            console.log(index);
            if (index >= 0) {

                $http({
                    method: 'DELETE',
                    url: 'http://test-api.javascript.ru/v1/yloboda/letters/' + mail._id,
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    }
                })
                    .then(function (response) {
                        console.log(response.data);
                        self.mails.splice(index, 1);
                        self.deleteTime = performance.now();
                        console.log('loadTime: ' + this.loadTime + " deleteTime: " + this.deleteTime);
                        self.mailLive = self.deleteTime - self.loadTime;
                        alert("'" + mail.subject + "'" + " will be deleted \n\r Mail was living " + self.mailLive + " miliseconds.");
                    }, function (rejection) {
                        console.log(rejection.data);
                    });

            }
        }


    }
});

app.component('mailBody', {
    bindings: {
        mail: "<mail",
        onDelete: '&'
    },
    templateUrl: './templates/mailbody.tpl.html',
    controller: function () {
        this.delete = function () {
            this.onDelete({mail: this.mail});
        };
    }
});

