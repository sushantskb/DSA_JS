// Using custom logic
let data = [10, 5, 6, 2, 85, 4];
let newElem = 7;
let pos = 2;

for (let i = data.length - 1; i >= 0; i--) {
  if (i >= pos) {
    data[i + 1] = data[i];
    if(i == pos){
        data[i] = newElem;
    }
  }
}
console.log(data);


//shortcut to insert
data.splice(1, 0, 2000); // here 1 means the index, 0 is the number of elements we want to delete and 2000 is the number we want to insert
console.log(data);