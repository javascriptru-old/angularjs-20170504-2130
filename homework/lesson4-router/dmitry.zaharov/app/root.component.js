(function () {
    'use strict';

    angular
        .module('app')
        .component('app', app());

    function app() {
        var component = {
            template: '<ui-view></ui-view>'
        };
        return component;
    }

})();

