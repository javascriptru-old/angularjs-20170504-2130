let app = angular.module('myApp', []);


//angular.bootstrap(document.body, ['myApp'], {});


app.component('userCard', {
    templateUrl: './templates/usercard.tpl.html',
    controller: function ($http) {

        // $scope.$ctrl === this
        // scope: {}

        //ВОПРОС: Если не $scope а this совсем не видит items?
        this.users = {};

        this.getUsers = () => {
            $http.get('https://randomuser.me/api?results=10').then((response) => {
                for(var key in response.data.results){
                    this.users[key] = response.data.results[key];

                }
            }, function error(response) {
                console.log("Error");
                console.log("response: " + response.status);
            });
        };
        this.getUsers();

        this.selected = -1;
        this.getSelected = function(index){
            this.selected = index;
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
