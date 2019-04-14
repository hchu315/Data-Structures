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

// RECURSION DFS - utilizes the call stack

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
    let node =  queue.shift(); //consider visited once shifted off so log the value next line

    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

/* NOTE: will almost never see a recursive BFS due to the fact that recursion utilizes a call stack while BFS is the
opposite and uses a queue */