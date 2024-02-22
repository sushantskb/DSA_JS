let data = new Set(["anil", "peter", "anil"]);

// adding more datas
data.add({"email"  : "sushant@gmail.com"});

// deleting the data
data.delete("anil");

// using loops
 // for of loop
 for(x of data){
    console.log(x);
 }

 //for each
 data.forEach((val) => {
    console.log(val);
 })

 // to get the whole set
console.log(data.entries());

console.log(data);