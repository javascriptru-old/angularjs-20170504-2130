let app = angular.module('myApp', ['ngSanitize']);


app.component('mailList', {
    templateUrl: './templates/maillist.tpl.html',
    controller: function ($http, $interval, $sce) {
        this.loadTime = performance.now();

        this.mails = {};

        var self = this;

        this.getMails = function () {
            this.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            let url = "http://random.vkhs.ru/letters/50";
            $http({
                method: 'GET',
                url: this.trustSrc(url),
                params: {
                    format: 'jsonp',
                    name: 'Random mails'
                }
            }).then(function (success) {
                self.mails = success.data;
            }, function (data) {
                console.log("Invalid data returned");
                console.log(data);
            });
            return this.mails;
        };


        this.getMails();

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
        };

        this.$onChanges = function (changes) {
            if (changes) {
                $interval(function () {
                    self.quantity++;
                }, 3000);
            }
        };

        this.deleteMail = function (mail) {
            let index = this.mails.indexOf(mail);
            if (index >= 0) {
                this.mails.splice(index, 1);
                this.deleteTime = performance.now();
                console.log('loadTime: ' + this.loadTime + " deleteTime: " + this.deleteTime);
                this.mailLive = this.deleteTime - this.loadTime;
                alert("'" + mail.title + "'" + " will be deleted \n\r Mail was living " + this.mailLive + " miliseconds.");
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

