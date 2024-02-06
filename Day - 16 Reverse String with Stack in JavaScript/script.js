let data = [];
let currentSize = data.length;

function push(newVal){
    data[currentSize] = newVal;
    currentSize++;
}

function pop(){
    lastRemoved = data[currentSize - 1];
    currentSize--;
    data.length = currentSize;
    return lastRemoved;
}

function revString(item){
    for (let i = 0; i < item.length; i++) {
        push(item[i]);
    }

    for (let i = 0; i < item.length; i++) {
        item[i] =  pop();
    }
}

let str = "sushant";
str = str.split("");
revString(str);
console.log(str.join(""));