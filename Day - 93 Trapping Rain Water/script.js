/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalTrappedWater = 0;
    for(let i = 1; i < height.length - 1; i++) {
        let leftMax = Math.max(...height.slice(0, i));
        let rightMax = Math.max(...height.slice(i+1));

        let water = Math.min(leftMax, rightMax);
        let trappedWater = water - height[i];

        if(trappedWater < 0) {
            trappedWater = 0
        }

        totalTrappedWater+=trappedWater;
    }
    return totalTrappedWater
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))