(function () {
    'use strict';

    angular
        .module('components')
        .component('userCard', userCard());

    /* @ngInject */
    function userCard() {
        var component = {
            controller: 'UserCardController',
            controllerAs: 'vm',
            templateUrl: 'app/components/user-card/user-card.tpl.html',
            bindings: {
                user: '<'
            }
        };
        return component;
    }

})();

