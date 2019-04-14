// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (!nums) return null;

  const midIndex = Math.floor(nums.length / 2);
  const rootNode = new TreeNode(nums[midIndex]);

  rootNode.left = sortedArrayToBST(nums.slice(0, midIndex))
  rootNode.right = sortedArrayToBST(nums.slice(midIndex + 1))

  return rootNode;
}