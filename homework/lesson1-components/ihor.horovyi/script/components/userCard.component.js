/** @author ihor.horovyi */


angular.module("userLists").component('userCard', {
    templateUrl: './templates/userCard.tmpl.html',
    bindings: {
        user: '<'
    },
    controller: function () {
        this.selected = false;

        this.selectUser = function () {
            this.selected = !this.selected;
        };
        
        this.myClick = function (user) {
            this.selectUser();

            var element = document.getElementById('user-' + user.id);

            if (this.selected) {
                element.setAttribute("style", "border-style: double; border-width: thick; border-color: yellow;");
            } else {
                element.removeAttribute("style");
            }
        };
    }
});