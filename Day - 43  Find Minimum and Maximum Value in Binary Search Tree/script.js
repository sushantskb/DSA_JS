class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    makeTree(val) {
      let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (root.value > newNode.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right == null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    minValue(root){
        if(!root.left){
            return root.value;
        } else {
            return this.minValue(root.left);
        }
    }

    maxValue(root){
        if(!root.right){
            return root.value;
        } else {
            return this.maxValue(root.right);
        }
    }
  }
  
  let bst = new BST();
  bst.makeTree(20);
  bst.makeTree(10);
  bst.makeTree(30);
  bst.makeTree(5);
  bst.makeTree(11);
  bst.makeTree(23);
  bst.makeTree(40);
  
  console.log(`The min value in tree is : ${bst.minValue(bst.root)}`);
  console.log(`The max value in tree is : ${bst.maxValue(bst.root)}`);