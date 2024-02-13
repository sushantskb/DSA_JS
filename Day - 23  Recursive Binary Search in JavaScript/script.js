let data = [20, 34, 54, 5, 67, 78];
let start = 0;
let end = data.length - 1;
let find = Math.floor(Math.random() * 100);
console.log("Find:", find);
let pos = "undefined";
function RecBinarySearch(data, start, end){
    if(start > end){
        return false;
    }
    let mid = Math.floor((start + end) / 2);
    if(data[mid] === find){
        pos = mid;
        return true;
    } else if(data[mid] < find){
        return RecBinarySearch(data, mid + 1, end);
    } else {
        return RecBinarySearch(data, start, mid - 1);
    }
}
RecBinarySearch(data, start, end);
if(pos != "undefined"){
    console.log(`The element is present at ${pos}`);
} else {
    throw new Error("Element is not present");
}