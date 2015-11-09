exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2] );
  },

  speak : function(fn, obj) {

    return fn.call(obj);
  },

  functionFunction : function(str) {
        //console.log(str);
      return (function(){
        return str;
      })();
  },

  makeClosures : function(arr, fn) {
    /*console.log(arr);
    console.log(fn);
*/
  },

  partial : function(fn, str1, str2) {
/*        console.log(fn);
    console.log(str1);
    console.log(str2);*/
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
