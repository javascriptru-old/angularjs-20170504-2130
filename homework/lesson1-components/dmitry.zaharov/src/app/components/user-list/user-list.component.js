(function () {
    'use strict';

    angular
        .module('components')
        .component('userList', userList());

    /* @ngInject */
    function userList() {
        var component = {
            controller: 'UserListController',
            controllerAs: 'vm',
            templateUrl: 'app/components/user-list/user-list.tpl.html',
            bindings: {}
        };
        return component;
    }

})();

