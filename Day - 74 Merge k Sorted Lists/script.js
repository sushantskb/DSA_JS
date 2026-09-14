class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

function printList(head) {
    let result = [];

    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }

    console.log(result);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) return null;
    return mergeRange(lists, 0, lists.length - 1);
};

const mergeRange = (lists, start, end) => {
    if (start === end) return lists[start];
    if(start+1 === end) return mergeTwoLists(lists[start], lists[end]);
    let mid = Math.floor((start + end) / 2);
    let left = mergeRange(lists, start, mid);
    let right = mergeRange(lists, mid + 1, end);

    return mergeTwoLists(left, right);
}

const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
            current = current.next;
        } else {
            current.next = l2;
            l2 = l2.next;
            current = current.next;
        }
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

printList(mergeKLists([arrayToList([1,4,5]), arrayToList([1,3,4]), arrayToList([2,6])]))