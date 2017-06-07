(function () {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    /* @ngInject */
    function routes ($stateProvider) {
        $stateProvider.state({
            name: 'loginForm',
            url: '/',
            template: '<login-form></login-form>'
        });
        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<home></home>',
            abstract: true
        });
        $stateProvider.state({
            name: 'home.mailBox',
            url: '/mail-box',
            template: '<mail-box></mail-box>'
        });
        $stateProvider.state({
            name: 'home.userList',
            url: '/user-list',
            template: '<user-list></user-list>'
        });
        $stateProvider.state({
            name: 'home.user',
            url: '/user/:id',
            template: '<user-card></user-card>'
        });

    }

})();

