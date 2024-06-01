var maxArea = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let max = 0;
    while(leftPointer < rightPointer) {
        let leftHeight = height[leftPointer];
        let rightHeight = height[rightPointer]

        let min_height = Math.min(leftHeight, rightHeight)

        let length = rightPointer - leftPointer

        let current_area = min_height * length;
        max = Math.max(max, current_area)

        if(leftHeight < rightHeight){
            leftPointer++
        } else {
            rightPointer--
        }
    }

    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));