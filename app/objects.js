exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
	return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
	return constructor;
  },

  iterate : function(obj) {
    var obj2=[];
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        //console.log(obj[key])
        obj2.push(key+': '+obj[key]);
      }
    }
    return obj2;
  }
};
