/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/
function twoSum(arr,terget){
	var result = []
	for (var i = 0 ; i < arr.length; i++) {
	 for(var j = i+1; j < arr.length; j++){
	 	if(arr[i] + arr[j] === terget){
	 	 result.push(i)
	 	 result.push(j)
	 	 break;
	 	}
	 }
	} return result
}

