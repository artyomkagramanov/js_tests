exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
/*  	console.log(num)
  	console.log(bit)*/
  },

  base10: function(str) {
  	
  	return parseInt(str,2)
  },

  convertToBinary: function(num) {
  	

  	console.log(num);

  	var n=65;

  	console.log(n.toString(2))

  },

  multiply: function(a, b) {
  	return a*b;
  }
};
