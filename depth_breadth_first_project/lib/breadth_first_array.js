function breadthFirstArray(root) {
    const queue = [root];
    const treeValues = [];

    while (queue.length) {
        let node = queue.shift();
        
        treeValues.push(node.val);

        if (node.left) queue.push(node.left); 
        if (node.right) queue.push(node.right); 
    }

    return treeValues;
}

module.exports = {
    breadthFirstArray
};