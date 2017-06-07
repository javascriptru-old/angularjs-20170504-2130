/** @author ihor.horovyi */

'use strict'

let app = angular.module("userLists", []);

app.component('userList', {
    templateUrl: './templates/userLists.tmpl.html',
    controller: function () {
        this.show = true;
        this.toggleBlock = () => {
            this.show = !this.show;
        };
        this.border = false;

        this.selectUser = function(user) {
            user.selected = true;
        };
        this.users = [
            {
                "id":"1",
                "gender": "male",
                "first": "Benjamin",
                "last": "Olsen",
                "email": "benjamin.olsen@example.com",
                "dob": "1950-12-17 08:14:53",
                "street": "5122 birkebakken",
                "city": "viby sj.",
                "photo": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            {
                "id":"2",
                "gender": "female",
                "first": "Edith",
                "last": "Flores",
                "email": "edith.flores@example.com",
                "dob": "1976-08-14 00:01:33",
                "street": "1762 mcgowen st",
                "city": "bowral"
            }
        ];
        this.isPhotoEmpty = function(userPhoto) {
            console.log(userPhoto);
            return userPhoto;
        };
    }
});