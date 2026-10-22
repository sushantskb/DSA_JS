var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) {
                bound = mid;
                if(isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };
    const firstBound = findBound(true);
    if(firstBound === -1) {
        return [-1, -1];
    }
    const lastBound = findBound(false);
    return [firstBound, lastBound];
};

console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]