var combinationSum2 = function(candidates, target) {

    let result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(index, current, remaining) {

        // Target reached
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {

            // Skip duplicate candidates at the same level
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // No need to explore further
            if (candidates[i] > remaining) {
                break;
            }

            // Choose
            current.push(candidates[i]);

            // Move to next index (number cannot be reused)
            backtrack(i + 1, current, remaining - candidates[i]);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
};

console.log([10,1,2,7,6,1,5], 8)