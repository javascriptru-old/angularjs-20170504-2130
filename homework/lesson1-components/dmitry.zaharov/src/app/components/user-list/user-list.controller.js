(function () {
    'use strict';

    angular
        .module('components')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['userListService'];

    /* @ngInject */
    function UserListController(userListService) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.onlyPhoto = false;
            vm.data = userListService.getData();
            vm.selectedUser = vm.data[0];
        }
    }

})();

