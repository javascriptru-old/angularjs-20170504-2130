(function () {
    'use strict';

    angular
        .module('app')
        .component('home', home());

    /* @ngInject */
    function home() {
        var component = {
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: 'app/components/home/home.html',
            bindings: {}
        };
        return component;
    }

    HomeController.$inject = ['$mdSidenav'];

    /* @ngInject */
    function HomeController($mdSidenav) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            vm.toggleLeftMenu = toggleLeftMenu;
        }

        function toggleLeftMenu() {
            $mdSidenav('left').toggle();
        }
    }

})();

