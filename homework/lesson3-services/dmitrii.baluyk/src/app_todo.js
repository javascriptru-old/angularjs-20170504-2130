/**
 * Created by Balyuk-D on 23.05.2017.
 */
import './todo_style.css';
import app from './app_main';

var  todoListTemplate = `
  <h2>TODO $http</h2>
  <section id="todoapp">
  <header id="header">
    <h1>todos</h1>
    <div style=" padding: 0px 20px; width: 100%; text-align: center;">
        <div ng-repeat="user in $ctrl.users" style="display: inline-block;">
            <todo-users user="user" app-get-user="$ctrl.getCurrentUser(user)"></todo-users>
        </div>
    </div>
    <form id="todo-form" ng-submit="$ctrl.addTodo()">
      <input id="new-todo" placeholder="What needs to be done?" ng-model="$ctrl.newTodo" autofocus>
    </form>
  </header>
  <section id="main" ng-if="$ctrl.todos.length">
    <ul id="todo-list">
      <todo-item ng-repeat="todo in $ctrl.todos" item="todo" remove="$ctrl.removeTodo(todo)"></todo-item>
    </ul>
  </section>
  </section>
  `;

var  todoItemTemplate = `
  <li>
    <div class="view">
      <label>{{$ctrl.todo.title}}</label>
      <button class="destroy" ng-click="$ctrl.remove({todo:$ctrl.todo})"></button>
    </div>
  </li>`;

var todoUsersTemplate = `
    <div style="display: inline-block">
        <img style="width:69%; border-radius:20px; cursor: pointer" 
             ng-src={{$ctrl.user.avatarUrl}}
             ng-click="$ctrl.getUser($ctrl.user)">
        <span style="display: block">{{$ctrl.user.fullName}}</span>
    </div>`;

app.component("appTodo",{
    template: todoListTemplate,
    controller: function(users_api){
        this.todos = [];
        this.newTodo = '';
        this.users = '';
        this.currentUser = '';


        users_api.getUsers().then((a)=>{
            this.users = a;
            this.currentUser = a[0];
        }).then(()=>{
            this.getTasks();
        });

        this.getTasks = ()=>{
            users_api.getTasks().then((a)=>{
                let arr_result = _.filter(a,(b)=>{
                    if(b.tags[0]){
                        return b.tags[0].title == this.currentUser._id
                    }
                    return false
                });

                this.todos = arr_result;
            });
        };

        this.addTodo = () => {
            var newTodo = {
                title: this.newTodo.trim()
            };

            if (newTodo.title) {
                users_api.addTask(this.currentUser._id,newTodo.title).then((a)=>{
                    this.todos.push(a);
                });
                this.newTodo = '';
            }
        };

        this.getCurrentUser = (user)=>{
            this.currentUser = user;
            this.getTasks();
        }

        this.removeTodo = (todo) => {
            users_api.deleteTasks(todo._id).then(()=>{
                this.todos.splice(this.todos.indexOf(todo), 1);
            })
        };

    }
});

app.component('todoItem', {
    bindings: {
        todo: '<item',
        remove: '&'
    },
    template: todoItemTemplate,
    controller: function (users_api) {
        this.$onInit = function () {

        }
    }
});

app.component('todoUsers', {
    bindings: {
        user: '<user',
        appGetUser: '&'
    },
    template: todoUsersTemplate,
    controller: function(users_api){
        this.$onInit = function () {

        }

        this.getUser = (user) =>{
            this.appGetUser({user : user});
        }
    }
});

app.service('users_api',function($http){
    this.getUsers = ()=>{
        return $http.get('http://test-api.javascript.ru/v1/dmitrii.baluyk/users')
            .then((data)=>{
                return data.data
            })
    };

    this.addTask = (id,title)=>{
        let data = JSON.stringify({
            title: title,
            tags: [{
                class: "_id",
                title: id
            }]
        });

        return $http.post('http://test-api.javascript.ru/v1/dmitrii.baluyk/tasks', data)
            .then((data) => {
                return data.data
            })
    };

    this.getTasks = ()=>{
        return $http.get('http://test-api.javascript.ru/v1/dmitrii.baluyk/tasks')
            .then((data)=>{
                return data.data
            });
    };

    this.deleteTasks = (id)=>{
        return $http.delete('http://test-api.javascript.ru/v1/dmitrii.baluyk/tasks/'+id)
            .then((data)=>{
                console.log("Delete OK")
            })
    }
});