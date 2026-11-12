/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    function backtrack(index, current, remaining) {
        if(remaining === 0) {
            result.push([...current]);
            return;
        }

        if(remaining < 0) {
            return;
        }

        for(let i = index; i < candidates.length; i++) {
            if(candidates[i] <= remaining) {
                current.push(candidates[i]);
                backtrack(i, current, remaining - candidates[i]);
                current.pop();
            }
        }
    }
    backtrack(0, [], target);
    return result;
};

console.log(combinationSum([2,3,6,7], 7)); // Output: [[2,2,3],[7]]