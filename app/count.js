exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
	
	var intervalID = window.setInterval(function(){
		if(start<=end){
			start++;	      
        }
		else {
			stop(); 
         }
  		}, 100);;

	function stop(){
  		clearInterval(intervalID);
  	}

  	return{
  		cancel:function(){
  			clearInterval(intervalID);
  		}
  	}



  }

};
