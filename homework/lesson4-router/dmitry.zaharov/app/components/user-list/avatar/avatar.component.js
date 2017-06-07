(function () {
    'use strict';

    angular
        .module('app')
        .component('avatar', avatar());

    function avatar() {
        var component = {
            controller: AvatarController,
            templateUrl: 'app/components/user-list/avatar/avatar.html',
            bindings: {
                src: '<',
                userName: '<'
            }
        };
        return component;
    }

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
