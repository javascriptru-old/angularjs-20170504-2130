let app = angular.module('myApp', []);


app.component('userCard', {
    templateUrl: './templates/usercard.tpl.html',
    controller: function ($scope, $http) {

        //ВОПРОС: Если не $scope а this совсем не видит items? 
        $scope.users = {};

        function getUsers() {
            $http.get('https://randomuser.me/api?results=10').then(function success(response) {
                for(var key in response.data.results){
                    $scope.users[key] = response.data.results[key];

                }
            }, function error(response) {
                console.log("Error");
                console.log("response: " + response.status);
            });
        };
        getUsers();

        $scope.selected = -1;
        $scope.getSelected = function(index){
            $scope.selected = index;
        }
    }
});


app.component('avatar', {
    bindings: {
        image: '='
    },
    template: '<img ng-src="{{$ctrl.image}}" alt="">',
    controller: function () {

    }
});

app.filter('capitalize', function() {
    return function(str) {
        return (!!str) ? str.charAt(0).toUpperCase() + str.substr(1).toLowerCase() : '';
    }
});
