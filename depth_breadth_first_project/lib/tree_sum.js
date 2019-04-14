function treeSum(root) {
    if (!root) return 0;
    let treeSum = 0;

    const stack = [root];

    while (stack.length) {
        let node = stack.pop();
        
        treeSum+= node.val

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return treeSum;
}


module.exports = {
    treeSum
};