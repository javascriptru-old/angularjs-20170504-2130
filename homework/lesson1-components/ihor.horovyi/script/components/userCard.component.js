/** @author ihor.horovyi */


angular.module("userLists").component('userCard', {
    templateUrl: './templates/user-card.tpl.html',
    controller: function () {
        this.users = [
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "benjamin",
                    "last": "olsen"
                },
                "email": "benjamin.olsen@example.com",
                "dob": "1950-12-17 08:14:53",
                "location": {
                    "street": "5122 birkebakken",
                    "city": "viby sj.",
                    "state": "danmark",
                },
                "photo": "https://randomuser.me/api/portraits/men/51.jpg"
            },

            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "edith",
                    "last": "flores"
                },
                "email": "edith.flores@example.com",
                "dob": "1976-08-14 00:01:33",
                "location": {
                    "street": "1762 mcgowen st",
                    "city": "bowral",
                    "state": "victoria",
                    "postcode": 792
                }
            },

            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "amandine",
                    "last": "rodriguez"
                },
                "location": {
                    "street": "4199 rue du village",
                    "city": "limoges",
                    "state": "maine-et-loire",
                    "postcode": 82979
                },
                "email": "amandine.rodriguez@example.com",
                "dob": "1956-12-21 00:49:07",
                "photo": "https://randomuser.me/api/portraits/women/35.jpg",
            },

            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "patricia",
                    "last": "byrd"
                },
                "location": {
                    "street": "3446 rochestown road",
                    "city": "cashel",
                    "state": "clare",
                    "postcode": 20728
                },
                "email": "patricia.byrd@example.com",
                "dob": "1979-08-11 19:37:17",
                "photo": "https://randomuser.me/api/portraits/women/90.jpg",
            }
        ];
    }
});