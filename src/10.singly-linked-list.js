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

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(value) {
        const newNode = new SingleNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let item = this.head;
        let counter = 0;

        while (counter < index) {
            item = item.next;

            counter++;
        }

        return item;
    }

    set(index, value) {
        const item = this.get(index);

        if (item) {
            item.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const newNode = new SingleNode(value);
            const prevItem = this.get(index - 1);
            const postItem = prevItem.next;

            prevItem.next = newNode;
            newNode.next = postItem;
            this.length++;
        }

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const prevItem = this.get(index - 1);
        const itemToRemove = prevItem.next;

        prevItem.next = itemToRemove.next;
        this.length--;

        return itemToRemove;
    }

    reverse() {
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;

        let currentNode = this.tail.next;
        let prevNode = this.tail;
        let nextNode = currentNode.next;
        this.tail.next = null;

        while (currentNode.next) {
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = currentNode.next;

            if (!currentNode.next) {
                currentNode.next = prevNode;
                break;
            }
        }

        // return this;
    }
}

let list = new SinglyLinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);

console.log(list.reverse());
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
