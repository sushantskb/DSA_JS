let data1 = [1,2,5,12611,151,6];
let data2 = [4,41,23,1,51,6];
let data3 = [];

for (let index = 0; index < data1.length; index++) {
    data3[index] = data1[index];
}
for (let index = 0; index < data2.length; index++) {
    data3[data1.length + index] = data2[index];
}

// we can also use spread operator to merge two arrays
data3 = [...data1, ...data2];
console.log(data3);