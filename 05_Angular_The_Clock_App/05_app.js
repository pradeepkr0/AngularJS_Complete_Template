var app = angular.module("ClockApp",[]); //create of Angular Module
app.controller("ClockAppCtrl",function ($scope,$interval){
   function indianDate(){
      var today = new Date();
      var options = {timeZone:"Asia/Kolkata"};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
   }
   indianDate();
   $interval(indianDate,1000);

   function usDate(){
       var today = new Date();
       var options = {timeZone:"America/New_York"};
       $scope.usTime = today.toLocaleTimeString('en-US',options);
       $scope.usDate = today.toLocaleDateString('en-US',options);
   }
   usDate();
   $interval(usDate,1000);

    function chinaDate(){
        var today = new Date();
        var options = {timeZone:"Asia/Shanghai"};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    }
    chinaDate();
    $interval(chinaDate,1000);
});