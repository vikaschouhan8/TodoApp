'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
    this.helloConsole = function() {
        console.log("Hello Console function");
    };

    this.getTodos = function(callback){
        $http.get('mock/todos.json')
    .then(callback);
    };

    this.deleteTodo = function(todo) {
        console.log("this deleted " + todo.name + " from todos");
    };

    this.saveTodos = function(todos) {
        console.log(todos.length + " todos have been saved!");
    };

});