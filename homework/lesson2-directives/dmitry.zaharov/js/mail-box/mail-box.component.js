/*globals faker*/
(function () {
    'use strict';

    angular
        .module('app')
        .component('mailBox', mailBox());

    /* @ngInject */
    function mailBox() {
        var component = {
            controller: MailBoxController,
            controllerAs: 'mb',
            templateUrl: 'js/mail-box/mail-box.tpl.html',
            bindings: {}
        };
        return component;
    }

    MailBoxController.$inject = ['$timeout'];

    /* @ngInject */
    function MailBoxController($timeout) {
        var LIMIT = 10;
        var mb = this;

        mb.$onInit = onInit;

        ////////////////

        function onInit() {
            mb.limit = LIMIT;
            mb.mails = getMails(LIMIT);

            mailGenerator();
        }

        function getMail() {
            return {
                id: +new Date(),
                avatar: faker.internet.avatar(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                subject: faker.company.bs(),
                content: faker.lorem.paragraph()
            };
        }

        function getMails(count) {
            var mails = [];
            while (mails.length < count) {
                mails.push(getMail());
            }
            return mails;
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function mailGenerator() {
            var delay = getRandomInt(3000, 8000);
            $timeout(function () {
                mb.mails.unshift(
                    getMail()
                );
                mailGenerator();
            }, delay);
        }

    }

})();
