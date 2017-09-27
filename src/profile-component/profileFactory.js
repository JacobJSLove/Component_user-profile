'use strict';

app.factory('DataService', function($resource) 
{
  return $resource('test-view.json', {
    update: {
      method: 'PUT'
    }
  });
});