/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let missing = 1;
  let positiveArray = nums.filter(num => num > 0);
  let found = false;

  while(!found) {
    if(positiveArray.includes(missing)) {
        missing++;
    } else {
        found = true;
    }
  }

  return missing;
};

console.log(firstMissingPositive([1,2,0]))