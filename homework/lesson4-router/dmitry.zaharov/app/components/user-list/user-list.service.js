(function () {
    'use strict';

    angular
        .module('app')
        .service('userListService', userListService);

    userListService.$inject = ['$http', '$q', '$log', '$timeout'];

    /* @ngInject */
    function userListService($http, $q, $log, $timeout) {
        var userListCache = null;

        /* jshint -W040 */
        this.getUserList = getUserList;
        this.getUser = getUser;

        ////////////////

        function getUserList() {
            if (userListCache) {
                var deferred = $q.defer();
                deferred.resolve(userListCache);
                return deferred.promise;
            } else {
                return $http({
                    method: 'GET',
                    url: 'https://randomuser.me/api/',
                    params: {
                        noinfo: '',
                        nat: 'US',
                        results: 10,
                        inc: [
                            'name',
                            'location',
                            'email',
                            'picture',
                            'phone'
                        ].join(',')
                    }
                }).then(function (resp) {
                    var data = resp.data.results;
                    var i = 1;
                    userListCache = data.map(function (user) {
                        user.id = i;
                        user.name = [
                            capitalize(user.name.first),
                            capitalize(user.name.last)
                        ].join(' ');
                        i++;
                        return user;
                    });
                    return $q.resolve(userListCache);
                }, function (resp) {
                    $log.error(
                        'При получении списка пользователей прооизошла ошибка!',
                        angular.toJson(resp)
                    );
                });
            }
        }

        function getUser(id) {
            if (userListCache) {
                var deferred = $q.defer();
                var result = findUserById(userListCache, id);
                $timeout(function () {
                    if (result) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject('Пользователь с id ' + id + ' не найден.');
                    }
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return getUserList().then(function (userList) {
                    var user = findUserById(userList, id);
                    if (user) {
                        return $q.resolve(user);
                    } else {
                        return $q.reject('Пользователь с id ' + id + ' не найден.');
                    }
                }, function (resp) {
                    $log.error(
                        'При получении пользователя прооизошла ошибка!',
                        angular.toJson(resp)
                    );
                    return $q.reject('Пользователь с id ' + id + ' не найден.');
                });
            }
        }

        function findUserById(data, id) {
            var result = null;
            data.forEach(function (user) {
                if (user.id === id) {
                    result = user;
                }
            });
            return result;
        }

        function capitalize(string) {
            var firstCharCap = string[0].toUpperCase();
            return firstCharCap + string.slice(1);
        }
    }

})();

