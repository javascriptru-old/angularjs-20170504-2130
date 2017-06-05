(function () {
    'use strict';

    angular
        .module('app')
        .component('loginForm', loginForm());

    /* @ngInject */
    function loginForm() {
        var component = {
            controller: LoginFormController,
            controllerAs: 'vm',
            templateUrl: 'app/components/login-form/login-form.html',
            bindings: {}
        };
        return component;
    }

    LoginFormController.$inject = ['$state', 'loginFormService'];

    /* @ngInject */
    function LoginFormController($state, loginFormService) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.signIn = signIn;
        }

        function signIn() {
            $state.go('home.userList');
        }
    }

})();

