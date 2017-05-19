
import angular from 'angular';

let app = angular.module('ngApp', []);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

app.component('appRoot', {
    template: require("./app-root.tpl.html"),
    controller: function($http){
        this.users = [];
        this.onlyPhoto = false;
        this.selected = {};
        this.selected.id = 0;
        this.load = function() {
            $http.get('https://randomuser.me/api/?results=12').then(
                (response)=>{
                    this.users = response.data.results;
                    for(let i=1;i<=6;i++) {
                        let ind = randomInteger(0,11);
                        this.users[ind].picture = null;
                    }
                },
                (error)=>{
                    console.log('Ошибка при обращении к randomuser.me', error)
                }
            );
        };
        this.load();
    }
});

app.component('userCard', {
    template: require("./user-card.tpl.html"),
    bindings: {
        user: '<',
        selected: '='
    },
    controller: function () {
        this.click = function() {
            this.selected.id = (this.selected.id == this.user.$$hashKey) ? 0 : this.user.$$hashKey;
        }
    }
});

app.component('avatar', {
    template: require("./avatar.tpl.html"),
    bindings: {
        picture: '<'
    },
    controller: function () {
        this.unknownAvatar = 'https://image.freepik.com/free-icon/no-translate-detected_318-57434.jpg'
    }
});
