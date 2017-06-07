(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMaterial'
        ])
        .run(onAppLaunch);

    onAppLaunch.$injector = ['$transitions', '$mdComponentRegistry'];

    /* @ngInject */
    function onAppLaunch($transitions, $mdComponentRegistry) {
        $transitions.onSuccess({}, function () {
            $mdComponentRegistry.when('left').then(function(navDrawer) {
                if (navDrawer.isOpen()) {
                    navDrawer.close();
                }
            });
        });
    }

})();

