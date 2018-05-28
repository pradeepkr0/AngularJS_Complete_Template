var app = angular.module("likesApp",[]); //creation of Angular Module.
app.controller("likesAppCtrl",function ($scope){ //creation of Controller.
    $scope.likes =0;
    $scope.dislikes=0;
    $scope.total=0
    $scope.liked= function(){
        $scope.likes++;
        $scope.total++;
    };
    $scope.disliked = function(){
        $scope.dislikes++;
        $scope.total++;
    };
});