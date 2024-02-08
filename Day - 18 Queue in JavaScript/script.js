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

function display(){
    console.log(queue);
}


let queue = [];
let currentSize = queue.length;
let maxSize = 10;
let enqueueValue = Math.floor(Math.random() * 20);
let dequeueValue = Math.floor(Math.random() * 9);

for (let i = 0; i < enqueueValue; i++){
    enqueue(i);
}

console.log("After enqueue operation, enqueue value:", enqueueValue);

display();

for (let i = 0; i < dequeueValue; i++){
    dequeue();
}

console.log("After dequeue operation, dequeue value:", dequeueValue);

display();