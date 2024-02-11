let data = [2, 23, 34, 56, 67, 12];
let find = Math.floor(Math.random() * 100);
console.log("find:", find);
let pos = "undefined";
for (let i = 0; i < data.length; i++) {
    if(data[i] == find){
        pos = i;
        break;
    }
}

if(pos === "undefined"){
    console.log("Element doesn't exist");
} else {
    console.log(`The element is present at ${pos} postion`);
}