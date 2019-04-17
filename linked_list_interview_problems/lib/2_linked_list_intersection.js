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
  if (!list1.head || !list2.head) return null;

  let index = Math.abs(list1.length - list2.length)
  const longList = list1.length > list2.length ? list1 : list2;
  const shortList = list1.length > list2.length ? list2 : list1;
  // let longListNode = longList.get(index);
  let longListNode = longList.head;
  let shortListNode = shortList.head;
  // console.log(longListNode)

  while (longListNode) {
    if (shortListNode === longListNode) return shortListNode.value;
    console.log(`short List: ${shortListNode.value}`)
    console.log(`long List: ${longListNode.value}`)
    shortListNode = shortListNode.next;
    longListNode = longListNode.next;
  }
  // const shortList =  list1.length > list2.length ? list2 : list1;
  // const longList = list1 === shortList ? list2 : list1;
  // const visitedObj = {};

  // let currentNode = shortList.head;
  // while (currentNode) {
  //   visitedObj.currentNode = true;
  //   currentNode = currentNode.next;
  // }

  // let otherNode = longList.head;
  // while (otherNode) {
  //   if (visitedObj.otherNode === true) return otherNode.value;
  //   otherNode = otherNode.next
  // }


  return null
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
