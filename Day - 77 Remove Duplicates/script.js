var removeDuplicates = function(nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            nums[k] = nums[i];
            k++
        }
    }
    return {
        length: k,
        nums: nums.slice(0, k)
    }
};

nums = [1,1,2]
console.log(removeDuplicates(nums))