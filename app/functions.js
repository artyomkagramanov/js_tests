exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2] );
  },

  speak : function(fn, obj) {

    return fn.call(obj);
  },

  functionFunction : function(str) {
    function f1(str){
      return function(str2){
        return str + ', ' + str2;
      }
    }
    return f1(str);
      
  },

  makeClosures : function(arr, fn) {
    /*console.log(arr);
    console.log(fn);*/


  },

  partial : function(fn, str1, str2) {
    var part = function(str3){
      return fn(str1,str2,str3)
    }
    return part;
  },

  useArguments : function() {
    if(arguments.length === 1){
      return arguments[0];
    } else if(arguments.length === 2){
      return arguments[0] + arguments[1];
    } else if(arguments.length === 3){
      return arguments[0] + arguments[1] + arguments[2];
    } else {
      return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {
    
 
  },

  curryIt : function(fn) {
    //console.log(fn)
  }
};
