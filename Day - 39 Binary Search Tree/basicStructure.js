class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    isTreeEmpty(){
        return this.root === null;
    }
}

let bst = new BST();
console.log(bst.isTreeEmpty());