let app = angular.module('myApp', []);
app.component('appRoot', {
   templateUrl: './app-root.tpl.html',
    controller: function(){
       this.users = {
           user1: {name: 'name1', image: 'portraits/thumb/lego/0.jpg', checked: false},
           user2: {name: 'name2', image: 'portraits/thumb/lego/1.jpg', checked: false},
           user3: {name: 'name3', image: 'portraits/thumb/lego/2.jpg', checked: false},
           user4: {name: 'name4', image: 'portraits/thumb/lego/3.jpg', checked: false},
           user5: {name: 'name5', image: 'portraits/thumb/lego/4.jpg', checked: false},
           user6: {name: 'name6', image: 'portraits/thumb/lego/5.jpg', checked: false},
           user7: {name: 'name7', image: 'portraits/thumb/lego/6.jpg', checked: false},
           user8: {name: 'name8', image: 'portraits/thumb/lego/7.jpg', checked: false},
           user9: {name: 'name9', image: 'portraits/thumb/lego/8.jpg', checked: false}
       };
        this.checked = false;
        this.onClick = (user) => {
            console.log(user);
            user.checked = !user.checked;
        }
    }
});

app.component('userCard', {
    bindings: {
        user: '<'
    },
    templateUrl: './user-card.tpl.html'
});
