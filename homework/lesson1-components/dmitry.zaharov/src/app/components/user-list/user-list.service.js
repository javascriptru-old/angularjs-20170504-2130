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
            return [
                {
                    'name': {
                        'title': 'miss',
                        'first': 'hannah',
                        'last': 'schmid'
                    },
                    'email': 'hannah.schmid@example.com',
                    'picture': {
                        'large': 'https://randomuser.me/api/portraits/women/51.jpg',
                        'medium': 'https://randomuser.me/api/portraits/med/women/51.jpg',
                        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/51.jpg'
                    }
                },
                {
                    'name': {
                        'title': 'mrs',
                        'first': 'harriet',
                        'last': 'chen'
                    },
                    'email': 'harriet.chen@example.com',
                    'picture': {
                        'large': 'https://randomuser.me/api/portraits/women/35.jpg',
                        'medium': 'https://randomuser.me/api/portraits/med/women/35.jpg',
                        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/35.jpg'
                    }
                },
                {
                    'name': {
                        'title': 'mrs',
                        'first': 'florence',
                        'last': 'rose'
                    },
                    'email': 'florence.rose@example.com',
                    'picture': {
                        'large': 'https://randomuser.me/api/portraits/women/47.jpg',
                        'medium': 'https://randomuser.me/api/portraits/med/women/47.jpg',
                        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/47.jpg'
                    }
                },
                {
                    'name': {
                        'title': 'mr',
                        'first': 'veeti',
                        'last': 'makela'
                    },
                    'email': 'veeti.makela@example.com',
                    'picture': {
                        'large': 'https://randomuser.me/api/portraits/men/80.jpg',
                        'medium': 'https://randomuser.me/api/portraits/med/men/80.jpg',
                        'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/80.jpg'
                    }
                },
                {
                    'name': {
                        'title': 'monsieur',
                        'first': 'ilyès',
                        'last': 'lambert'
                    },
                    'email': 'ilyès.lambert@example.com',
                    'picture': {
                        'large': 'https://randomuser.me/api/portraits/men/72.jpg',
                        'medium': 'https://randomuser.me/api/portraits/med/men/72.jpg',
                        'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/72.jpg'
                    }
                }
            ];
        }
    }

})();

