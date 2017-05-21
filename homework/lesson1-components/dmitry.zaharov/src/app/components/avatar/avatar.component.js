(function () {
    'use strict';

    angular
        .module('app')
        .component('avatar', avatar());

    function avatar() {
        var component = {
            controller: 'AvatarController',
            templateUrl: 'app/components/avatar/avatar.tpl.html',
            bindings: {
                src: '<',
                userName: '<'
            }
        };
        return component;
    }

})();
