// const swap = (a, b) => {
//     console.log(a, b);

//     let temp = a;
//     a = b;
//     b = temp;

//     console.log("after swap", a, b);

//     return [a, b];
// };

// var swapPairs = function(head) {

//     let i = 0;
//     let newHead = [];

//     while (i < head.length) {

//         if (head[i + 1] !== undefined) {

//             newHead.push(...swap(head[i], head[i + 1]));

//             i += 2;

//         } else {

//             newHead.push(head[i]);
//             i++;
//         }
//     }

//     return newHead;
// };

// console.log(swapPairs([1, 2, 3]));

// Linked List Style
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

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;

    return [a, b];
}

var swapPairs = function(head) {
    let current = head;
    while (current !== null) {
        if (current.next !== null) {
            [current.val, current.next.val] = swap(current.val, current.next.val);
            current = current.next.next;
        }
    }
    return head;
};

printList(swapPairs(arrayToList([1, 2, 3, 4])));