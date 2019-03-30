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

// 3 (recursive) Algorithms to print out all the values of tree

1. In-Order
  function in-order(node) {
    if (node) return;

    return node.left;
    return node.value;
    return node.right;
  }


2. Pre-Order

3. Post-Order