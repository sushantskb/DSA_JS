class Queue{
    constructor (size){
        this.max = size;
        this.item = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(newVal){
        if(this.currentSize != this.max){
            if(this.rear == this.max-1){
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.item[this.rear] = newVal;
            this.currentSize++;
            if(this.front == -1){
                this.front = this.rear
            }
        } else {
            throw new Error("Queue is full");
        }
    }

    dequeue(){
        if(this.currentSize != 0){
            this.item[this.front] = null;
           if(this.front == this.max-1){
            this.front = 0;
           } else{
            this.front++;
           }
           this.currentSize--;
        }else {
            this.front = -1;
            this.rear = -1;
            throw new Error("Queue is empty");
        }
    }
}

let queue = new Queue(4);

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);

queue.dequeue();
queue.dequeue();

queue.enqueue(34);
console.log(queue);