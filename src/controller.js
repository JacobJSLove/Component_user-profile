var app = angular
.module('app', [])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.controller('testCtrl',  function(meProfile , $scope){
        const user =  {
        name:data.name,
        photo:data.img
      }
  console.log(data)
})


