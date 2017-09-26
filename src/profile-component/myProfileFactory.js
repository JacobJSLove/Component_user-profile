app.factory('meProfile', function(DataService) {
    function getData(){
    	DataService.allData().then(function (response) {
    		response.data.me_view;
  },function (error){
  	console.log(error);
  })}
    	return {
    		data:getData()
    	}
});