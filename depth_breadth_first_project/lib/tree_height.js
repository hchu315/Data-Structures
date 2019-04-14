function treeHeight(root) {
    if (!root) return -1; //base case, empty node is height -1 and a single node is height of 0

    const left = treeHeight(root.left);
    const right = treeHeight(root.right);

    if (left > right) {
        return left + 1; //adding to count the height and also cancels out when the recursion hits the end
    } else {
        return right + 1;
    }
}


module.exports = {
    treeHeight
};