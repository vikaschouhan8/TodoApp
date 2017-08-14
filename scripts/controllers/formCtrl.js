angular.module('todoListApp')
.controller('formCtrl', function () {
    $scope.inputValue = null;
    $scope.abc = function (value) {
        console.log(value);
    };
});