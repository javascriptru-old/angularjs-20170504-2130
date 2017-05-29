
let app =angular.module('todomvc', []);

app.component('todoList', {
    templateUrl: 'todoList.tpl.html',
    controller: ['todos', function( todos ) {

        this.getTodos = () => todos.get().then((data) => this.todos = data);

        this.addTodo = () => {
            let newTodo = {
                title: this.newTodo.trim()
            };
            if (newTodo.title) {
                todos.add(newTodo).then(()=>{
                    this.getTodos();
                    this.newTodo = '';
                });
            }
        };

        this.removeTodo = (todo) => {
            todos.remove(todo._id).then(()=>{this.getTodos()});
        };

        this.$onInit = () => {
            this.todos = [];
            this.newTodo = '';
            this.getTodos();
        }
    }]
});

app.component('todoItem', {
    bindings: {
        todo: '<item',
        remove: '&'
    },
    templateUrl: 'todoItem.tpl.html'
});

app.service('todos', ['$http', function($http){
    this.url = 'http://test-api.javascript.ru/v1/vktodos';
    this.get = () => $http.get(this.url + '/tasks').then( response => response.data );
    this.add = ( task ) => $http.post(this.url + '/tasks', task);
    this.remove = ( id ) => $http.delete(this.url + '/tasks/' + id);
}]);