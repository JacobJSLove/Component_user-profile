app.factory('DataService', function($http) {
       return {
       	allData: function() {
           return $http.get('test-view.json')
       }
   }
});