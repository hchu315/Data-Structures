// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = newTail;
            this.tail.next = null;
        }
            
        this.length--;
        return current;

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.tail = newNode; 
        } else {
            newNode.next = this.head;
        }
        this.head = newNode; 
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        const node = this.head;
        if (this.length === 1) {
            this.tail = null;
        } 
        this.head = this.head.next
        
        this.length--;
        return node;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }

        if (!current) return false;
        current.value = val
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);
        const newNode = new Node(val);
        let previous;
        let current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();

        const previousNode = this.get(index - 1);
        const node = previousNode.next;
        previousNode.next = node.next;
        this.length--;
        return node;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
