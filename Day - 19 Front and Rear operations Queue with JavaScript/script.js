function enqueue(val){
    if(currentSize <= maxSize){
        queue[currentSize] = val;
        currentSize++
    } else{
        throw new Error("Queue is full");
    }
}

function dequeue(){
    if(currentSize > 0){
        for(let i = 0; i < queue.length; i++){
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize;
    } else {
        throw new Error("Queue is already empty")
    }
}

function isEmpty(){
    if(currentSize <= 0){
        return true;
    } else{
        return false;
    }
}
function rear(){
    if(!isEmpty()){
        return queue[currentSize - 1];
    } else {
        throw new Error("Queue is empty");
    }
}

function front(){
    if(!isEmpty()){
        return queue[0]
    } else {
        throw new Error("Queue is empty");
    }
}


function display(){
    console.log(queue);
}


let queue = [];
let currentSize = queue.length;
let maxSize = 10;
let enqueueValue = Math.floor(Math.random() * 20);
let dequeueValue = Math.floor(Math.random() * 19);

for (let i = 0; i < enqueueValue; i++){
    enqueue(i);
}

console.log("After enqueue operation, enqueue value:", enqueueValue);

display();

console.log("The front item is", front());
console.log("The rear item is", rear());

console.log();

for (let i = 0; i < dequeueValue; i++){
    dequeue();
}

console.log("After dequeue operation, dequeue value:", dequeueValue);

console.log("The front item is", front());
console.log("The rear item is", rear());
display();