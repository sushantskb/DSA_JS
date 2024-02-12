let data = [5, 9, 13, 12, 30];
let start = 0;
let end = data.length-1;
let pos = "undefined";
let find = Math.floor(Math.random()* 31);
console.log("The element is", find);

while(start <= end){
    let mid = Math.floor(( start + end ) / 2);
    if(data[mid] == find){
        pos = mid;
        break;
    } else if(data[mid] < find) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

if(pos === "undefined"){
    throw new Error("Element not found");
} else {
    console.log(`The element is at postion ${pos}`);
}