var permute = function (nums) {
    let result = [];
    function swap(a,b) {
        return [nums[a], nums[b]] = [nums[b], nums[a]];
    }

    function factorial(n) {
        let count = 1;
        for (let i = 0; i < n; i++) {
            count *= i;
        }
        return count;
    }

    function arrange(start) {
        if(start === nums.length - 1) {
            result.push([...nums]);
            return;
        }

        for(let i = start; i < nums.length; i++) {
            swap(start, i);
            arrange(start + 1);
            swap(start, i);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[0]) {
            swap(0,i);
        }

        arrange(1);
        swap(0, i);
    }

    return result;
}

console.log(permute([1,2,3]))