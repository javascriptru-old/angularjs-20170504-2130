(function () {
    'use strict';

    angular
        .module('components')
        .service('userListService', userListService);

    /* @ngInject */
    function userListService() {
        this.getData = getData;

        ////////////////

        function getData() {
            var data = [
                {
                    "name": {
                        "title": "mr",
                        "first": "alex",
                        "last": "haas"
                    },
                    "location": {
                        "street": "1833 grüner weg",
                        "city": "rosenheim",
                        "state": "nordrhein-westfalen",
                        "postcode": 20632
                    },
                    "email": "alex.haas@example.com",
                    "phone": "0657-7139479",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/24.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
                    }
                },
                {
                    "name": {
                        "title": "mr",
                        "first": "eetu",
                        "last": "heikkinen"
                    },
                    "location": {
                        "street": "7886 reijolankatu",
                        "city": "kontiolahti",
                        "state": "satakunta",
                        "postcode": 75613
                    },
                    "email": "eetu.heikkinen@example.com",
                    "phone": "09-368-490",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/53.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
                    }
                },
                {
                    "name": {
                        "title": "mr",
                        "first": "dominic",
                        "last": "wilson"
                    },
                    "location": {
                        "street": "9621 cedar st",
                        "city": "windsor",
                        "state": "alberta",
                        "postcode": 69957
                    },
                    "email": "dominic.wilson@example.com",
                    "phone": "961-722-1432",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/20.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
                    }
                },
                {
                    "name": {
                        "title": "mr",
                        "first": "wesley",
                        "last": "cox"
                    },
                    "location": {
                        "street": "4752 strand road",
                        "city": "oranmore",
                        "state": "sligo",
                        "postcode": 57960
                    },
                    "email": "wesley.cox@example.com",
                    "phone": "051-888-2428",
                    "picture": {
                        "large": "",
                        "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                        "thumbnail": ""
                    }
                },
                {
                    "name": {
                        "title": "ms",
                        "first": "leta",
                        "last": "vargas"
                    },
                    "location": {
                        "street": "4297 homestead rd",
                        "city": "the colony",
                        "state": "arkansas",
                        "postcode": 88312
                    },
                    "email": "leta.vargas@example.com",
                    "phone": "(573)-100-8358",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/95.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
                    }
                },
                {
                    "name": {
                        "title": "miss",
                        "first": "belen",
                        "last": "lozano"
                    },
                    "location": {
                        "street": "4164 paseo de extremadura",
                        "city": "cuenca",
                        "state": "navarra",
                        "postcode": 11856
                    },
                    "email": "belen.lozano@example.com",
                    "phone": "995-366-660",
                    "picture": {
                        "large": "",
                        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
                        "thumbnail": ""
                    }
                },
                {
                    "name": {
                        "title": "mr",
                        "first": "theo",
                        "last": "morgan"
                    },
                    "location": {
                        "street": "7124 highfield road",
                        "city": "lichfield",
                        "state": "dyfed",
                        "postcode": "M3J 0XA"
                    },
                    "email": "theo.morgan@example.com",
                    "phone": "017683 04193",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/45.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                    }
                },
                {
                    "name": {
                        "title": "mr",
                        "first": "efe",
                        "last": "tuğluk"
                    },
                    "location": {
                        "street": "9350 necatibey cd",
                        "city": "kocaeli",
                        "state": "şırnak",
                        "postcode": 27240
                    },
                    "email": "efe.tuğluk@example.com",
                    "phone": "(164)-061-4652",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/90.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
                    }
                },
                {
                    "name": {
                        "title": "ms",
                        "first": "pihla",
                        "last": "salmela"
                    },
                    "location": {
                        "street": "4150 suvantokatu",
                        "city": "hankasalmi",
                        "state": "southern ostrobothnia",
                        "postcode": 46764
                    },
                    "email": "pihla.salmela@example.com",
                    "phone": "02-974-291",
                    "picture": {
                        "large": "",
                        "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
                        "thumbnail": ""
                    }
                },
                {
                    "name": {
                        "title": "ms",
                        "first": "veronica",
                        "last": "vicente"
                    },
                    "location": {
                        "street": "2784 calle de la democracia",
                        "city": "burgos",
                        "state": "aragón",
                        "postcode": 83872
                    },
                    "email": "veronica.vicente@example.com",
                    "phone": "931-532-449",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/83.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
                    }
                }
            ];
            return data.map(function (user) {
                user.name = [user.name.first, user.name.last].join(' ');
                return user;
            });
        }
    }

})();

