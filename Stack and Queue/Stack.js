class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val);
    
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
      // newNode.next = temp
      
    }

    return ++this.length;
  }

  pop(val) {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const temp = this.top
    this.top = this.top.next
    this.length--;

    return temp.value;
  }

  size() {
    return this.length;
  }
}