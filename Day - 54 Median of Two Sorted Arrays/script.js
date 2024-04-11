var findMedianSortedArrays = function (nums1, nums2) {
  let num3 = [];
  let i = 0, j = 0, k = 0;

  while(i < nums1.length && j < nums2.length){
    if (nums1[i] < nums2[j]){
      num3[k] = nums1[i];
      i++;
    }
    else {
      num3[k] = nums2[j];
      j++;
    }

    k++;
  }

  // while( i < nums1.length){
  //   num3[k] = nums1[i];
  //   i++;
  //   k++;
  // }

  // while( j < nums2.length){
  //   num3[k] = nums2[j];
  //   j++;
  //   k++;
  // }

  // console.log(num3);

  if(num3.length % 2 === 0){
    return ((num3[num3.length / 2 - 1] + num3[num3.length / 2]) / 2).toFixed(5);
  } else {
    return(num3[Math.floor(num3.length / 2)]).toFixed(5);
  }

};

let nums1 = [0,0,0,0,0];
let nums2 = [-1,0,0,0,0,0,1];

console.log(findMedianSortedArrays(nums1, nums2));
