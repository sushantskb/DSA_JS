var removeElement = function(nums, val) {
   let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // overwrite nums in-place
            k++;
        }
    }

    return k;
};
console.log(removeElement([3,2,2,3], 3)) 