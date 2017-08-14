'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;

    $scope.checkValue = function(name){
        for(var i=$scope.todos.length -1; i >=0; i--){
            if( name == $scope.todos[i].name){
                alert(name + "is already exist");
                return false;
            } 
        } 
        $scope.addTodo(name);
    };

    $scope.addTodo = function(val){
        $scope.todos.unshift(val);
        $scope.todoList ={}
    };

    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
       $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function() {
        var filterdTodos = $scope.todos.filter(function(todo) {
            if(todo.edited){
                return todo;
            }
        });
        dataService.saveTodo(filterdTodos);
    };
});