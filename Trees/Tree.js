class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

// To create a tree using tree nodes

let a = new TreeNode('a')
let b = new TreeNode('b')
let c = new TreeNode('c')
let d = new TreeNode('d')
let e = new TreeNode('e')
let f = new TreeNode('f')
let g = new TreeNode('g')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

         a
       b   c
     d  e f  g

// 3 (recursive) Algorithms to print out all the values of Binary trees

1. In-Order
  function inOrder(root) {
    if (!root) return;

    return root.left;
    return root.value;
    return root.right;
  }


2. Pre-Order
  function preOrder(root) {
    if (!root) return;

    return root.value;
    return root.left;
    return root.right;
  }

3. Post-Order
  function postOrder(root) {
    if (!root) return;

    return root.left;
    return root.right;
    return root.value;
  }