let data = {
    name: "Sushant",
    age: 21,
    mail: "abcd@gmail.com"
}
// Adding the key and value to the array
data.contact = 9495343
data.temp = "Temporary"
// deleting the key and value in the array
delete data.temp;

// overwriting the values
data.name = "Rahul"

console.log(data);

// Iterating through the object
for(x in data){
    console.log(x); // it gives all the keys
    console.log(data[x]); // it gives the values
}

// retriving all the keys as an array
console.log(Object.keys(data));

// retriving all the vlaues as an array
console.log(Object.values(data));

// retirving each key with its value as a separate array
console.log(Object.entries(data));