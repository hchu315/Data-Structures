function breadthFirstSearch(startingNode, targetVal) {
    const queue = [startingNode];
    const visited = new Set();

    while (queue.length) {
        let currentNode = queue.shift();
        if (visited.has(currentNode)) continue;
        if (currentNode.val === targetVal) return currentNode;
        visited.add(currentNode)
        if (currentNode.neighbors.length > 0) {
            currentNode.neighbors.forEach(neighbor => queue.push(neighbor))
        }
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};