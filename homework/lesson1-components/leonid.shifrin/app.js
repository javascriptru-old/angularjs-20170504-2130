const userInfo = [
    {
        "id": 1,
        "fullName": "Иванов Иван",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "birthdate": "1976-10-10",
        "gender": "мужской",
        "address": "ул. Звенигороская, 47б",
        "email": "ivanov@mail.ru"
    },
    {
        "id": 2,
        "fullName": "Сидоров Сидор",
        "avatarUrl": null,
        "birthdate": "1949-05-12",
        "gender": "мужской",
        "address": "ул. Есенина, 21",
        "email": "sidorov@mail.ru"
    },
    {
        "id": 3,
        "fullName": "Петров Петр",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
        "birthdate": "1957-01-14",
        "gender": "мужской",
        "address": "ул.Пушкиская, 13",
        "email": "ivanov@mail.ru"
    },

    {
        "id": 4,
        "fullName": "Натальина Наталья",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        "birthdate": "1990-07-03",
        "gender": "женский",
        "address": "ул. Лермонтова, 59",
        "email": "ivanov@mail.ru"
    }
];


angular.module('users', []).
    component('root', {
        template: `<user-card-list users="$ctrl.userInfo"></user-card-list>`,
        controller: function () {
            this.userInfo = userInfo;
            this.userInfo.forEach(info => info.selected = false);
        }
    }
).component('userCard',
    {
        templateUrl: 'userCard.html',
        bindings: {
            userinfo: '<',
            select: '&'
        }
    }
).component('userCardList',
    {
        templateUrl: 'userCardList.html',
        bindings: {
            users: '<'
        },
        controller: function(){
            this.showWithPhotosOnly = false;
            this.select = function(info){
                this.users.forEach(user => user.selected = false);
                info.selected = true;
            };
            
            this.userFilter = (info) => {
                return !this.showWithPhotosOnly || (info.avatarUrl !== null);
            };
        }
    }
).component('userAvatar',
    {
        template: `<img ng-src="{{$ctrl.url}}">`,
        bindings: {
            url: '<'
        }
    }
);
