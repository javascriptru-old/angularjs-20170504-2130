(function () {
    'use strict';

    angular
        .module('app')
        .controller('AvatarController', AvatarController);

    /* @ngInject */
    function AvatarController() {
        var $ctrl = this;

        $ctrl.$onInit = onInit;

        ////////////////

        function onInit() {
            //
        }

    }

})();

