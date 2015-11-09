exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = new RegExp('.*[0-9].*');
    return reg.test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([a-zA-Z]).*?\1/).test(str);
  },

  endsWithVowel : function(str) {
    var res= (/.*[aeiouAEIOU]$/).test(str);
    return res;
  },

  captureThreeNumbers : function(str) {
    var result = str.match( /[0-9]{3}/i );
    return result ? result[0] : false;
  },

  matchesPattern : function(str) {
    return (/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/).test(str);

  },
  isUSD : function(str) {
          return (/^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/).test(str);
  }
};
