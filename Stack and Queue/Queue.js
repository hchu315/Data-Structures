class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;  
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;   
    } else {
      // const temp = this.back;
      // newNode.next = temp;
      this.back.next = newNode; // why?
    }

    this.back = newNode; 
    return ++this.length;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
  
    const temp = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    
    this.front = this.front.next;
    this.length--;

    return temp.value;
  }

  size() {
    return this.length;
  }
}