exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
/*  	     console.log(str)
    console.log(amount)

    var temp_arr = [];
    var result_str = str[0];
    var temp_str = '';
    var counter = 1;
  	for(var i = 0;i < str.length;i++){
      if(i===0){
        if(str[i+1] === str[i]){

        }
      }
    }
    console.log(result_str)*/

  	
  },
  wordWrap: function(str, cols) {
    var return_str = '';
    var str_arr = str.split(' ');

    for (var i=0;i<str_arr.length;i++){
      if(str_arr[i].length != 1){
        if(i == 0)
          return_str += str_arr[i];
        else
          return_str += '\n' + str_arr[i];
      }
      else{
        if(i == 0)
          return_str += str_arr[i];
        else
          return_str += ' ' + str_arr[i];
      }
    }

     return return_str;

  },
  reverseString: function(str) {
  	var result='';
  	for(var i=str.length-1;i>=0;i--){
  		result+=str[i];
  	}
  	return result;
  }
};
