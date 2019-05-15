function b_search(arr, target) {
  if (arr.length === 0) return false;

  let midIndex = Math.floor(arr.length / 2)
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex + 1)

  if (arr[midIndex] > target) {
    return b_search(left, target)
  } else if (arr[midIndex] < target) {
    return b_search(right, target)
  } else {
    return true;
  }
}

// TIME COMPLEXITY
// O(log n), there are no loops in the function, so the only thing we're really counting is the
// the amount of recursive calls. Since we are splitting the data into half each call, it is log n

// SPACE COMPLEXITY
// O(n), slice creates a shallow copy of the array which takes up space. We are creating two new
// arrays each recursive call; which is essentially n amount of subarrays(halving the data set but
// each call has 2 subarrays)

// Other Notes
// Use it whenever you have sorted data, it is very fast and efficient