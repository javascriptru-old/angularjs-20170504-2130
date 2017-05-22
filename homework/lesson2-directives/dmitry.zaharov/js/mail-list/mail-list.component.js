(function () {
    'use strict';

    angular
        .module('app')
        .component('mailList', mailList());

    /* @ngInject */
    function mailList() {
        var component = {
            controller: MailListController,
            controllerAs: 'ml',
            templateUrl: 'js/mail-list/mail-list.tpl.html',
            bindings: {
                mails: '<',
                limit: '<'
            }
        };
        return component;
    }

    function MailListController() {
        var ml = this;

        ml.$onInit = onInit;

        ////////////////

        function onInit() {
            ml.deleteMail = deleteMail;
        }

        function deleteMail(mailId) {
            var mailsCopy = angular.copy(ml.mails);
            for (var mail, i = 0, _len = mailsCopy.length; i < _len; i++) {
                mail = mailsCopy[i];
                if (mail.id === mailId) {
                    ml.mails.splice(i, 1);
                }
            }
        }
    }

})();

