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

    makeTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    isTreeEmpty(){
        return this.root === null;
    }
}

let bst = new BST();

bst.makeTree(50);  // Root node
bst.makeTree(20);   // Left subtree
bst.makeTree(80);     // Right subtree
bst.makeTree(10);      // Left-most subtree
bst.makeTree(60);       // Right-most subtree
console.log(bst);