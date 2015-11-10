exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	var files = [];
	
	function listOfFiles(data){		
		for (var i = 0; i < data.length; i++) {
			if(typeof data[i] == 'string'){
				files.push(data[i]);
			} else listOfFiles(data[i].files)
		};	
	}


	function listOfFilesInSubDir(obj){		
		if(obj.dir == dirName){
			listOfFiles(obj.files)
		} else {
			for (var i = 0; i < obj.files.length; i++) {
				if(typeof obj.files[i] == 'object') listOfFilesInSubDir(obj.files[i]);
			};
		}
	}
	
	if(arguments.length === 1){
		listOfFiles(data.files);
		return files;
	} else {
		listOfFilesInSubDir(data);
		return files;
	}
	
  },

  permute: function(arr) {
  	//console.log(arr)
	function permutator(inputArr) {
		var results = [];

		function permute(arr, memo) {
			var cur, memo = memo || [];

			for (var i = 0; i < arr.length; i++) {
				cur = arr.splice(i, 1);
				if (arr.length === 0) {
					results.push(memo.concat(cur));
				}
				permute(arr.slice(), memo.concat(cur));
				arr.splice(i, 0, cur[0]);
			}

			return results;
		}

		return permute(inputArr);
	}
	
	return permutator(arr)
  },

  fibonacci: function(n) {
		function fib(n) {
		  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
		}
		return fib(n)
  },

  validParentheses: function(n) {
	function nPair(n) {
		if (n == 0)
		return [""];

		var result = [];
		for (var i = 0; i < n; ++i) {
			var lefts = nPair(i);
			var rights = nPair(n - i - 1);

			for (var l = 0; l < lefts.length; ++l)
			for (var r = 0; r < rights.length; ++r)
			result.push("(" + lefts[l] + ")" + rights[r]);
		}

		return result;
	}

	return nPair(n);
  }
};
