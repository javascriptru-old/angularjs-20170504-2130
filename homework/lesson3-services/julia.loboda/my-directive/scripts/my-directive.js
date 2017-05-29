let app = angular.module('myApp', []);

app.directive('clickDirective', function () {
    return {
        scope: {},
        templateUrl: './templates/click-directive.tpl.html',
        controller: function () {

            function clickDirective() {
                alert('Clicked directive');
            }

            let element = document.querySelector('.btn-click');
            element.addEventListener("click", clickDirective);

            this.value = "Click me";
        },
        controllerAs: '$ctrl'
    };
});

app.directive('showDirective', function () {
    return {
        scope: {},
        templateUrl: './templates/show-directive.tpl.html',
        controller: function () {

            let element = document.querySelector('.content-box');
            let condition = true;

            if (condition) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        },
        controllerAs: '$ctrl'
    };
});

