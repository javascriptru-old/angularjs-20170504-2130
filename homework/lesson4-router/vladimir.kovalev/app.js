
let app = angular.module('ngApp', ['ui.router', 'ngMaterial']);

app.config(($stateProvider) => {

    $stateProvider.state({
        name: 'home',
        url: '/',
        template: '<home></home>',
    });

    $stateProvider.state({
        name: 'cabinet',
        url: '/cabinet',
        template: '<cabinet></cabinet>'
    });

    $stateProvider.state({
        name: 'cabinet.users',
        url: '/users',
        template: '<user-box></user-box>'
    });

    $stateProvider.state({
        name: 'cabinet.user',
        url: '/user/:userId',
        template: '<user user-id="$ctrl.userId"></user>',
        controller: function($stateParams) {
            this.userId = $stateParams.userId;
        },
        controllerAs: '$ctrl'
    });

    $stateProvider.state({
        name: 'cabinet.mails',
        url: '/mails',
        template: '<mail-box></mail-box>'
    });

    $stateProvider.state({
        name: 'login',
        url: '/login',
        template: 'Login'
    });

});

app.component('appRoot', {
    template: '<ui-view></ui-view>'
});

app.component('home', {
    templateUrl: 'home.tpl.html'
});

app.component('cabinet', {
    templateUrl: 'cabinet.tpl.html'
});

app.component('user', {
    templateUrl: 'user.tpl.html',
    bindings: {
        userId: '<'
    }
});

