exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  //var a=(/(.)(?=.*\1)/g).match(str);
  //var str = 'aaxxxaabbbb'
  var dublicates_arr = str.match(/(.)(?=.*\1)/g)
  //console.log(str)
 // console.log(dublicates_arr)
  var filtered = str.replace(/(.)(?=\1)/g, "")
 // console.log(filtered)
  var removeDuplicatesInPlace = function (arr) {
    var i, j, cur, found;
    for (i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        found = false;
        for (j = i - 1; !found && j >= 0; j--) {
            if (cur === arr[j]) {
                if (i !== j) {
                    arr.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return arr;
  };

    var unique_arr = removeDuplicatesInPlace(dublicates_arr)
    //console.log(unique_arr)

    for (var i = 0; i < unique_arr.length; i++) {
      var item = '';
      for(var j=0;j<amount;j++){
         item+= unique_arr[i];
      }
      var reg = new RegExp(unique_arr[i], "g")

      filtered = filtered.replace(reg, item);
    };

//console.log(filtered)

return filtered


  	
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
