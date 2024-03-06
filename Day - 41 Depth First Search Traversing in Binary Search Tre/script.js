const prompt = require("prompt-sync")();
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

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
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
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);
// console.log(bst);