exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	
  	/*var result='';
  	var add=true;
  	for(var i=0;i<str.length;i++){
  		if(i+1 == str.length && add){
  			result += str[i];
  			continue;
  		}else if(i == 0){
  			result += str[i];
  			continue;
  		}else if(str[i] == result[i-1]){
  			result += str[i];
  			add=false;
  		}else if(str[i] !=)
  	}*/
 /* 	var temp_arr=[];
  		console.log(str)
  	console.log(amount)
  	for(var i=0;i<str.length;i++){
  		var str='';
  		if(i+1 != str.length){

  		}
*/

  	
  },
  wordWrap: function(str, cols) {
/*  	console.log(str)
  	console.log(cols)*/
  	var temp_arr = str.split(' ');


  	for(var i=0;i<temp_arr.length;i++){

  	}
  },
  reverseString: function(str) {
  	var result='';
  	for(var i=str.length-1;i>=0;i--){
  		result+=str[i];
  	}
  	return result;
  }
};
