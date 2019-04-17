// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!
  // if (!list1.head || !list2.head) return null;
  const list1Length = getListLength(list1.head);
  const list2Length = getListLength(list2.head);

  let index = Math.abs(list1Length - list2Length)
  const longList = list1.length > list2.length ? list1 : list2;
  const shortList = list1.length > list2.length ? list2 : list1;
  let longListNode = longList.head;
  let shortListNode = shortList.head;

  while (longListNode && shortListNode) {
    if (index > 0) {
      longListNode = longListNode.next;
      index--;
      continue;
    }
    
    if (longListNode === shortListNode) return longListNode; 
    // console.log(`short List: ${shortListNode.value}`)
    // console.log(`long List: ${longListNode.value}`)
    // shortListNode = shortListNode.next;
    longListNode = longListNode.next;
    shortListNode = shortListNode.next;
  }
  return null
}

function getListLength(node) {
  if (node.next === null) {
    return 1;
  } else {
    return getListLength(node.next) + 1;
  }
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
