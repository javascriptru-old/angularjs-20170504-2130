(function () {
    'use strict';

    angular
        .module('components')
        .controller('UserCardController', UserCardController);

    /* @ngInject */
    function UserCardController() {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            //
        }
    }

})();

