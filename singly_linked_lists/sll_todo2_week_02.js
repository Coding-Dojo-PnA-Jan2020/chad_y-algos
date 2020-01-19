// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second - to - last value in that list.What will you return if the list is not long enough ?

// SList : Delete Given Node
// Create ListNode method removeSelf() to disconnect(remove) itself from linked lists that include it.Note: the node might be the first in a list(it won’t be the last), and you do NOT have a pointer to the previous node.Also, don’t lose any subsequent nodes pointed to by.next.

// SList: Copy
// Given a pointer to a singly linked list, return a copy of that list.Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

// SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal.Return the new list.

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}