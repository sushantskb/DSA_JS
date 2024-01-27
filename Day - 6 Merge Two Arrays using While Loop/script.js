let data1 = [1, 2, 4, 16, 18];
let data2 = [9, 10, 28, 32];
let data3 = [];
i = 0;
j = 0;
k = 0;
while (i < data1.length && j < data2.length) {
  if (data1[i] <= data2[j]) {
    data3[k] = data1[i];
    i++;
  } else {
    data3[k] = data2[j];
    j++;
  }
  k++;
}

while(i <  data1.length){
    data3[k] = data1[i];
    i++;
    k++
} 
while(j < data2.length){
    data3[k] = data2[j];
    j++;
    k++;
}
console.log(data3);
