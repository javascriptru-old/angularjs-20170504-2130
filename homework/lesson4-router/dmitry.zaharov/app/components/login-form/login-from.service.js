(function () {
    'use strict';

    angular
        .module('app')
        .service('loginFormService', loginFormService);

    /* @ngInject */
    function loginFormService() {
        /* jshint -W040 */
        this.signIn = signIn;

        ////////////////

        function signIn() {
            //
        }
    }

})();

