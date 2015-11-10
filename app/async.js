exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
	var promise = new Promise(function(resolve, reject) {
  		if (value) {
		    resolve(value);
		  }
		  else {
		    reject(Error("Error"));
		  }
		});
  	return promise;
  },

  manipulateRemoteData : function(url) {
	var async= function(url)
	{
		var xmlhttp = new XMLHttpRequest();
	  	xmlhttp.open('GET', url, false);
	  	xmlhttp.send();
	  	var response = '';  
		
	  	if (xmlhttp.status != 200) {
	  		alert( xmlhttp.status + ': ' + xmlhttp.statusText ); 
		} else {
	  		response = xmlhttp.responseText
		}
		var arr_names = [];
		var data = JSON.parse(response, function(key, value) {
											  if (key == 'name') arr_names.push(value);
											  return value;
											});
		arr_names.sort();
		var promise = new Promise(function(resolve, reject) {
			  if (arr_names) {
			    resolve(arr_names);
			  }
			  else {
			    reject(Error("Error"));
			  }
			});
	  	return promise;
	  	
	}
  	
	return async(url);
  }
};
