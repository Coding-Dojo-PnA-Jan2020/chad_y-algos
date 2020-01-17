class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SList {
    constructor() {
        this.head = null;
    }
    push(val) {
        if (this.head == null) {
            this.head = new Node(val);
            return this.head;
        }
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(val);
        return node.next;
    }

    printVal() {
        var current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }

    min() {
        var node = this.head;
        var min = node.value;
        while (node != null) {
            if (node.value < min) {
                min = node.value;
            }
            node = node.next;
        }
        return console.log('min: ' + min);
    }

    max() {
        var node = this.head;
        var max = node.value;
        while (node != null) {
            if (node.value > max) {
                max = node.value;
            }
            node = node.next;
        }
        return console.log('max: ' + max);
    }

    avg() {
        var node = this.head;
        var count = 0, sum = 0;
        while (node != null) {
            count += 1;
            sum += node.value;
            node = node.next;
        }
        var avg = sum / count;
        return console.log('avg: ' + avg);
    }
}

var list = new SList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.printVal();
list.min();
list.max();
list.avg();