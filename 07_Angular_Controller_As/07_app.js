var app = angular.module("ControllerApp", []);

//Parent Controller
app.controller("ParentCtrl", function (){
    this.text = "";
});

//Child controller
app.controller("ChildCtrl", function () {
    this.text = "";
});