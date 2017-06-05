(function () {
    'use strict';

    angular
        .module('app')
        .component('userList', userList());

    /* @ngInject */
    function userList() {
        var component = {
            controller: UserListController,
            controllerAs: 'vm',
            templateUrl: 'app/components/user-list/user-list.html',
            bindings: {}
        };
        return component;
    }

    UserListController.$inject = ['userListService'];

    /* @ngInject */
    function UserListController(userListService) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.onlyPhoto = false;
            vm.data = [];
            vm.selectedUser = {};

            getUsers();
        }

        function getUsers() {
            return userListService.getUserList().then(function (users) {
                vm.data = users;
                vm.selectedUser = vm.data[0];
            });
        }
    }

})();

