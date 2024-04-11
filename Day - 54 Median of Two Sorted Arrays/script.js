var findMedianSortedArrays = function (nums1, nums2) {
  let num3 = [];
  let i = 0, j = 0, k = 0;

  while(i < nums1.length && j < nums2.length){
    if (nums1[i] < nums2[i]){
      num3[k] = nums1[i];
      i++;
    }
    else {
      num3[k] = nums2[j];
      j++;
    }

    k++;
  }

  while( i < nums1.length){
    num3[k] = nums1[i];
    i++;
    k++;
  }

  while( j < nums2.length){
    num3[k] = nums2[j];
    j++;
    k++;
  }

  if(num3.length % 2 === 0){
    return ((num3[num3.length / 2 - 1] + num3[num3.length / 2]) / 2).toFixed(5);
  } else {
    return(num3[Math.floor(num3.length / 2)]).toFixed(5);
  }

  // console.log(num3);
};

let num1 = [1, 2];
let num2 = [3, 4];

console.log(findMedianSortedArrays(num1, num2));
