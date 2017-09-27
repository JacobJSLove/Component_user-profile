'use strict';


var app = angular
.module('app', ['ngRoute','ngResource'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.filter('datecustom', function() {
  return function(item) {
    const dt2 = new Date().toISOString().slice(0,10); 
    const dt1 = item;
    var startDate = Date.parse(dt2);
    var endDate = Date.parse(dt1);
    var timeDiff =startDate - endDate;
    return  Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };
})


