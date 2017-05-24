/** @author ihor.horovyi */

'use strict'

angular.module("userLists").component('userPhoto', {
    bindings: {
        photo: '<image'
    },
    template: '<img ng-src="{{$ctrl.photo}}" alt="">',
    controller: function () { 	
    }
});