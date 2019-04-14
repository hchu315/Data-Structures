// DEPTH FIRST SEARCH
function depthFirst(root) {
  const stack = [root];

  while (stack.length) {
    let node = stack.pop(); //consider visited once popped
    console.log(node.value) //log value since visited

    if (node.right) {
      stack.push(root.right);
    } 
    
    if (root.left) {
      stack.push(root.left)
    }
  }

}

// recursion DFS - utilizes the call stack

function depthRecursion(root) {
  if (!root) return;
  console.log(root.value)

  depthRecursion(root.right);
  depthRecursion(root.left);
  // this algo is similar to preOrder function
}


// BREADTH FIRST SEARCH
function breadthFirst(root) {
  const queue = [root];

  while (root.length) {
    let node =  queue.shift();

    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}


// DFS re-type

function depthFirst(root) {
  // use stack
  const stack = [ root ];
  
  while (stack.length) {
    let top = stack.pop();
    console.log(top.value);
    
    if (top.right) stack.push(top.right)
    if (top.left) stack.push(top.left)
  }
}

function depthFirstRecursion(root) {
  if (!root) return;
  console.log(root.value)
  depthFirstRecursion(root.left);
  depthFirstRecursion(root.right);
}