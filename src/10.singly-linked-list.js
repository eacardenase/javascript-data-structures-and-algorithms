//@ts-check
'use strict';

class SingleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new SingleNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let newTail = null;
        let current = this.head;

        while (current) {
            newTail = current;
            current = current.next;

            if (!current.next) {
                break;
            }
        }

        newTail.next = null;
        this.tail = newTail;
        this.length--;

        return current;
    }
}

let list = new SinglyLinkedList();

list.push(80);
list.push(81);
list.push(85);
list.push(90);

console.log(list.tail);
console.log(list.pop());
console.log(list.tail);

// list.traverse();
// console.log('Head: ', list.head);
// console.log('Tail: ', list.tail);
// console.log('Length: ', list.length);
