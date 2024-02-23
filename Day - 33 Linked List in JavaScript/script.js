// class List {
//     constructor(data){
//         this.head = {
//             value: data,
//             next: null
//         }
//         this.tail = this.head
//     }

//     appendNode(addData){
//         let newNode = {
//             value: addData,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail= newNode
//     }
// }

// let data = Math.floor(Math.random() * 1000);
// let linkedList = new List(300);
// linkedList.appendNode(200);
// for (let i = 0; i < data; i++) {
//     linkedList.appendNode(i);
// }
// console.log(linkedList);


function List(data) {
    this.head = {
        value: data,
        next: null
    };
    this.tail = this.head;

    this.appendNode = function(addData) {
        let newNode = {
            value: addData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
    };
}

let data = Math.floor(Math.random() * 1000);
let linkedList = new List(300);
linkedList.appendNode(200);
for (let i = 0; i < data; i++) {
    linkedList.appendNode(i);
}
console.log(linkedList);
