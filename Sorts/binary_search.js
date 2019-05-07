function b_search(arr, target) {
  if (arr.length === 0) return false;

  let midIndex = Math.floor(arr.length / 2)
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex + 1)

  if (arr[midIndex] > target) {
    b_search(left, target)
  } else if (arr[midIndex] < target) {
    b_search(right, target)
  } else {
    return true;
  }
}