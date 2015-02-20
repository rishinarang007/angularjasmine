
angular.module("Todo",[]);

angular.module("Todo").controller("TodoCtrl", TodoController);


function TodoController($scope){
	$scope.todoList = [];
	$scope.todoList.length = 32;
}

TodoController['$inject'] = ["$scope"];