// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  function recursiveBuild(p, i) {
    if (!p.length || !i.length) return;

    const value = p[0];
    const rootIndex = i.indexOf(value); //also the # of left nodes;
    const root = new TreeNode(value);

    root.left = recursiveBuild(p.slice(1, rootIndex), i.slice(0, rootIndex))
    root.right = recursiveBuild(p.slice(1 + rootIndex), i.slice(rootIndex + 1))
    return root;
  }

  return recursiveBuild(preorder, inorder)
}
