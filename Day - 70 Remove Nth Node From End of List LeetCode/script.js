// var removeNthFromEnd = function (head, n) {

//   const index = head.length - n;
//   head.splice(index, 1);
//   return head;
// };

// using liked list
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var removeNthFromEnd = function (head, n) {
  const node = new ListNode(0);
  node.next = head;

  let firstPointer = node;
  let secondPointer = node;

  for (let step = 0; step <= n; step++) {
    firstPointer = firstPointer.next;
    console.log(firstPointer);
  }

  while (firstPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  secondPointer.next = secondPointer.next.next;

  return node.next;
};

function arrayToLinkedList(arr) {
  const node = new ListNode();
  let current = node;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return node.next;
}

function linkedListToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
const head = arrayToLinkedList([1, 2, 3, 4, 5]);
const n = 2;

// Process
const newHead = removeNthFromEnd(head, n);

// Output
console.log(linkedListToArray(newHead));
