let data = [9,45,2,8,58,7,5,8,2,7];
let output = "";
//Traversing in the array;
for (let i = 0; i < data.length; i++) {
    // console.log(`Array at ${i} is ${data[i]}`);
    output+=`${data[i]} `;
}
console.log(output.trim());


//Accessing the array:
console.log("Data at index 1 is " + data[1]); 