// Fronts
// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else.Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

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
    isEmpty() {
        return this.head === null;
    }
    addFront(val) {
        var newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFirst () {
        var removeThis = this.head.value;
        this.head = this.head.next;
        return removeThis;
    }
    printVal() {
        var current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
    addBack(val) {
        var newNode = new Node(val);
        var current = this.head;

        if (this.isEmpty()) {
            this.addFront(val);
            return;
        }
        while (current.next !== null) {
            console.log(current.value);
            current = current.next;
        }
        current.next = newNode;
    }
    length(){
        var count = 0;
        var runner = this.head;
        while (runner.next !== null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

var list = new SinglyLinkedList();
list.addFront("HELLO");
list.addBack("GOODBYE");
list.addBack("AGAIN");
list.addFront("rudy");
list.printVal();
console.log("Removing Head from Node")
console.log(list.removeFirst());
console.log("List after removing head from node")
console.log(list);
list.addBack("jimmy");
console.log(list);
console.log(list.head);
list.printVal();
console.log(list.length());




// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line.Given a pointer to the first node in a list, remove the head node and return the new list head node.If the list is empty, return null.




// Front
// Finally, Tad and Sam reach the front of the line to get movie tickets.Oh no – only one seat remains! Who was earlier in line: Tad or Sam ? Return the value(not the node) at the head of the list.If the list is empty, return null.