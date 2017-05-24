app.component('cardAvatar', {
    bindings: {
        image: '='
    },
    template: '<img ng-src="{{$ctrl.image}}" alt="">',
    controller: function () {

    }
});