var  app  = angular.module("ControllerApp",[]);

//parent controller
app.controller("parentCtrl",function ($scope){
    $scope.text = "";
});

//child controller
app.controller("childCtrl",function ($scope){
    $scope.text = "";
});