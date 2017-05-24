/** @author ihor.horovyi */


angular.module("userLists").component('userCard', {
    templateUrl: './templates/user-card.tpl.html',
    controller: function () {
        this.show = true;
        this.toggleBlock = () => {
            this.show = !this.show;
            console.log(this.show);
        };
        this.border = false;

        this.selectUser = function(user) {
            console.log(user);
            user.selected = true;
        };
        this.users = [
            {
                "gender": "male",
                "first": "Benjamin",
                "last": "Olsen",
                "email": "benjamin.olsen@example.com",
                "dob": "1950-12-17 08:14:53",
                "street": "5122 birkebakken",
                "city": "viby sj.",
                "photo": "https://randomuser.me/api/portraits/men/51.jpg",
                "selected": false
            },
            {
                "gender": "female",
                "first": "Edith",
                "last": "Flores",
                "email": "edith.flores@example.com",
                "dob": "1976-08-14 00:01:33",
                "street": "1762 mcgowen st",
                "city": "bowral",
                "selected": false
            },
            {
                "gender": "female",
                "first": "Amandine",
                "last": "Rodriguez",
                "street": "4199 rue du village",
                "city": "limoges",
                "email": "amandine.rodriguez@example.com",
                "dob": "1956-12-21 00:49:07",
                "photo": "https://randomuser.me/api/portraits/women/35.jpg",
                "selected": false
            },
            {
                "gender": "female",
                "first": "Patricia",
                "last": "Byrd",
                "street": "3446 rochestown road",
                "city": "cashel",
                "email": "patricia.byrd@example.com",
                "dob": "1979-08-11 19:37:17",
                "photo": "https://randomuser.me/api/portraits/women/90.jpg",
                "selected": false
            }
        ];
        this.isPhotoEmpty = function(userPhoto) {
            console.log(userPhoto);
            return userPhoto;
        };
    }
});