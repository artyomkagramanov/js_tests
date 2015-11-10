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

    var res_arr = [];
    var func = function(item){
        return function(){
          return fn(item);
        }
    }


    
      for( var i=0;i<arr.length;i++){
        res_arr.push(func(arr[i]));
      }

      return res_arr;
    
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

    //console.log(fn);
    var arguments = Array.prototype.slice.call(arguments,1);
    //console.log(arguments)
    return fn.apply(null,arguments);
  },

  partialUsingArguments : function(fn) {
    
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
      var remainingArgs = Array.prototype.slice.call(arguments)
      return fn.apply(null, args.concat(remainingArgs))
    }
      
  },

  curryIt : function(fn) {
    return function(a){
      return function(b){
        return function(c){
          return fn(a,b,c);
        }
      }
    }
  }
};


