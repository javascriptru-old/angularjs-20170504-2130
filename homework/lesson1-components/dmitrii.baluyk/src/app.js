var angular = require('angular'),
    bootstrap = require('bootstrap'),
    app_css = require('./app.css');

let app = angular.module("userList",[]);

app.component("userCard",{
    templateUrl: "./user-card.tmpl.html",
    controller: function () {
        let self = this;
        this.users = [];
        this.select_card = (user)=>{
            user.selected = !user.selected;
        }
        this.check_photo = (condion_cb, boolean_photo)=>{
            if(condion_cb){
                return boolean_photo
            }
            return true
        }

        get_users(5);

        function get_users(count){
            $.ajax({
                url: 'https://randomuser.me/api/?results='+count,
                dataType: 'json',
                success: function(data) {
                    let res_arr = data.results;
                    res_arr.forEach((a,i)=>{
                        let user = {
                            name : a.name.title + " " + a.name.first + " " + a.name.last,
                            birthday: a.dob,
                            male: a.gender,
                            adress: a.location.city + ", " + a.location.street,
                            email: a.email,
                            picture: i==1 || i==2 ? '' : a.picture.large,
                            class_hover: ''
                        };

                        self.users.push(user);
                    })
                },
                async: false
            });
        }
    }
});

app.component("avatarCard",{
    bindings: {
        picture: '<'
    },
    template: '<img ng-src="{{$ctrl.picture}}" style="width: 100%;">',
    controller: function(){

    }
});