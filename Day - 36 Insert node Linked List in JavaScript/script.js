class List{
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(newData) {
        let newNode = {
            value: newData
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    traversing() {
        let counter = 0;
        let currentNode = this.head;
        while( counter < this.size ){
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++;
        }
    }

    deletion(index){
        let lead = this.head;
        let counter = 1;
        if ( index === 1 ){
            this.head = this.head.next;
        } else {
            while(counter < index - 1){
                lead = lead.next;
                counter++;
            }
        }
        let newNode = lead.next.next;
        lead.next = newNode;
        console.log(lead);
    }

    insertNode(index, value){
        let counter = 1;
        let currentNode = this.head;
        while(counter > index ) {
            counter++
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value: value,
            next: nextNode
        }
    }
}

let list = new List(400);
list.appendNode(23);
list.appendNode(3);
list.appendNode(32);
list.insertNode(4, 3000);
// console.log(list); 
list.traversing()