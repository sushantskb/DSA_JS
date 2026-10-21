/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } 
        // Otherwise, the right half is sorted
        else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};

// Test cases
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));  // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));  // -1
console.log(search([1], 0));                    // -1
console.log(search([1], 1));                    // 0