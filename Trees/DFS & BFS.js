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