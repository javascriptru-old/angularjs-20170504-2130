(function () {
    'use strict';

    angular
        .module('app')
        .component('userCard', userCard());

    /* @ngInject */
    function userCard() {
        var component = {
            controller: UserCardController,
            controllerAs: 'vm',
            templateUrl: 'app/components/user-list/user-card/user-card.html',
            bindings: {
                userId: '<'
            }
        };
        return component;
    }

    UserCardController.$inject = ['$stateParams', 'userListService'];

    /* @ngInject */
    function UserCardController($stateParams, userListService) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.userId = vm.userId || ($stateParams.id ? parseInt($stateParams.id) : null);
            vm.error = false;

            getUser(vm.userId);
        }

        function getUser(id) {
            return userListService.getUser(id).then(function (user) {
                vm.user = user;
            }, function (resp) {
                vm.error = true;
            });
        }
    }

})();

