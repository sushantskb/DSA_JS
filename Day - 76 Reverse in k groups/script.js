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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head === null) return head;

    let { pair, current } = makePairs(head, k);

    // Not enough nodes left
    if (pair.length < k) {
        return head;
    }

    // Reverse current group
    let reversed = reverse(pair);

    // Process remaining groups
    let remaining = reverseKGroup(current, k);

    // Connect current reversed group with remaining list
    reversed.tail.next = remaining;

    return reversed.head;
};


function makePairs(head, k) {
    let current = head;
    let pair = [];
    let count = k;

    while (current !== null && count !== 0) {
        pair.push(current);
        current = current.next;
        count--;
    }

    return { pair, current };
}


function reverse(pair) {
    let head = pair[0];
    let tail = pair[pair.length - 1];

    // Save the node after the current group
    let stop = tail.next;

    let prev = null;
    let current = head;

    while (current !== stop) {
        let next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }

    return {
        head: tail,
        tail: head
    };
}


printList(
    reverseKGroup(
        arrayToList([1, 2, 3, 4, 5]),
        3
    )
);

// [3, 2, 1, 4, 5]