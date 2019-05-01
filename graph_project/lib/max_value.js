function maxValue(node, visited=new Set()) {
//recursive search; DOESNT' WORK
    // if (visited.has(node)) return;    
    // let maxVal = node.val;
    // visited.add(node);

    // node.neighbors.forEach(element => {
    //     let nextVal = maxValue(element, visited)
    //     if (nextVal > maxVal) maxVal = nextVal;
    //     return maxVal;
    // });

//iterative DFS;
    let maxVal = node.val;
    const stack = [node];

    while (stack.length) {
        let node = stack.pop();
        if (visited.has(node)) continue; 
        if (node.val > maxVal) maxVal = node.val;
        
        visited.add(node);
        stack.push(...node.neighbors);
    }
    return maxVal;
}

module.exports = {
    maxValue
};