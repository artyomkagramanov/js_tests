exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum=0;
    for(var i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var array = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i] != item)
        array.push(arr[i]);
    }
    return array;
  },

  removeWithoutCopy : function(arr, item) {
    var temp_array = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i] != item)
        temp_array.push(arr[i]);
    }
    
    arr.splice(0);

    for(var i=0;i<temp_array.length;i++){
      if(temp_array[i] != item)
        arr.push(temp_array[i]);
    }
    return arr;  
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var concat_array = arr1.concat(arr2);
    return concat_array;
  },

  insert : function(arr, item, index) {
    var array = [];
    for(var i=0;i<arr.length+1;i++){
      if(i == index){
        array[index] = item;
        continue;
      }else if(i>index){
        array[i] = arr[i-1];
        console.log('>')
        continue;
      } else {
        array[i] = arr[i];
        continue;
      }
    }
    return array;
  },

  count : function(arr, item) {
    var count=0;
    for(i=0;i<arr.length;i++){
      if (arr[i] == item) count++;
    }
    return count;
  },

  duplicates : function(arr) {
    //console.log(arr);
    //console.log(item);
    function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
    var result=[];
    for(var i=0;i<arr.length;i++){
      for(j=0;j<arr.length;j++){
        if (arr[i] == arr[j] && !contains(arr,arr[i])) {
          result.push(arr[i]  );
          continue;
        }
      }
    }
    //console.log(array)
    return result;
  },

  square : function(arr) {
    for(var i=0;i<arr.length;i++){
      arr[i]=Math.pow(arr[i],2)
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var temp_array = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i] === target){
        temp_array.push(i);
      }
    }
    return temp_array;
  }
};
