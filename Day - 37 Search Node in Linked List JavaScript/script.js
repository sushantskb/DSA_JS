class List{
    constructor(data){
        this.head = {
            value: data,
            next : null
        }
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(newData){
        let newNode = {
            value: newData,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    searchNode(val){
        let result = undefined
        let lead = this.head;
        let loop = true;
        while(loop){
            lead = lead.next;
            loop = !!lead;
            if(loop && lead.value === val){
                loop = false;
                result = lead
            }
        }
        // console.log(result);
        if(result){
            console.log(result);
        } else {
            console.log("Node not found");
        }
    }
}

const list = new List(200);
list.appendNode(20);
list.appendNode(220);
list.appendNode(550);
list.searchNode(210);