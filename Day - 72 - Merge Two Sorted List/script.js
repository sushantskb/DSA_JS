class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 1. Helper: Array -> Linked List
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// 2. Helper: Linked List -> Array (for readable logging)
function listToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
};

const l1 = arrayToList([1, 2, 4]);

const l2 = arrayToList([1, 3, 4]);

const merged = mergeTwoLists(l1, l2);

console.log(listToArray(merged));