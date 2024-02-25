class List {
    linkedList(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(addData){
        let newNode = {
            value: addData,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    travesere(){
        let counter = 0;
        let currentNode = this.head;
        while( counter < this.size){
            console.log(currentNode);
            currentNode = currentNode.next;
            counter+=1;
        }
    }
}

let data = Math.floor(Math.random() * 10);
let LL = new List();
LL.linkedList(data);
for (let i = 0; i < data; i++){
    LL.appendNode(i);
}

LL.travesere()