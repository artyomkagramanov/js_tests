exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	
	return (function(){
				return{ // методы доступные извне
    			sayIt: function() {
         			return this.greeting + ", " + this.name;
    			},
    			name : str2,
    			greeting : str1
    	}
    }());

  }
};
