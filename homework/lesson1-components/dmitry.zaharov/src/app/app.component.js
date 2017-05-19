(function () {
    'use strict';

    angular
        .module('app')
        .component('app', app());

    /* @ngInject */
    function app() {
        var component = {
            templateUrl: 'app/app.tpl.html'
        };
        return component;
    }

})();

