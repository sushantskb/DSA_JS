/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let find = binarySearch(nums, target);

    if (find !== -1) return find;

    if (target < nums[0]) return 0;

    while (find === -1 && target >= nums[0]) {
        target--;
        find = binarySearch(nums, target);
    }

    return find + 1;
};

function binarySearch(nums, target) {
    let left = 0; 
    let right  = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function binarySearch(nums, target) {
    let left = 0; 
    let right  = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log([1,2,3,6], 7);
