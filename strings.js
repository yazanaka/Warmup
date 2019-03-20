// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var result = "";
	for (var i = 0 ; i < s ; i++) {
		result = result + n;
	}
	return result;
	}