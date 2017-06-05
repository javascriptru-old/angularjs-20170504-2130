(function () {
    'use strict';

    angular
        .module('app')
        .component('mailItem', mailItem());

    /* @ngInject */
    function mailItem() {
        var component = {
            controller: MailItemController,
            controllerAs: 'mi',
            templateUrl: 'app/components/mail-box/mail-item/mail-item.html',
            bindings: {
                mailObj: '<',
                deleteFn: '&'
            }
        };
        return component;
    }

    MailItemController.$inject = ['$log'];

    /* @ngInject */
    function MailItemController($log) {
        var startTime;
        var mi = this;

        mi.$onInit = onInit;
        mi.$onDestroy = onDestroy;

        ////////////////

        function onInit() {
            startTime = +new Date();
        }

        function onDestroy() {
            var lifetime = (+new Date() - startTime) / 1000;
            $log.info(mi.mailObj.subject + ': ' + lifetime + ' s');
        }

    }

})();

