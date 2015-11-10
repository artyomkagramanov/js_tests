exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    
    function NumberControl(num)
    {

        if(!isNaN(parseInt(num))){
            num = '' + num;
            var digits_arr = []
            for (var i = 0; i < num.toString().length; i++) {
                 digits_arr.push(num[i]);
            };

            var lastDigit = parseInt(digits_arr[digits_arr.length-1]);
            var digits_sum = 0;
            for (var i = 0; i < digits_arr.length; i++) {
                digits_sum += parseInt(digits_arr[i]);
            };

            if( (lastDigit === 0 || lastDigit === 5) && (digits_sum % 3 === 0) ){ //divisible by 5 and 3
                return 'fizzbuzz';
            } else if ( (lastDigit === 0 || lastDigit === 5) ) { //divisible by 5 
                return 'buzz';
            } else if ( (digits_sum % 3 === 0) ) { //divisible by 3
                return 'fizz';
            } else { //otherwise if number return number
                return parseInt(num);
            }
        } else {
            return false;
        }
    }
        
    return NumberControl(num);

  }
};
