function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let midIndex = Math.floor(arr.length / 2)
  sortedLeft = merge_sort(arr.slice(0, midIndex))
  sortedRight = merge_sort(arr.slice(midIndex))

  return merge(sortedLeft, sortedRight)
}

function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] >= arr2[0]) {
      merged.push(arr2.shift())
    } else {
      merged.push(arr1.shift())
    }
  }

  return merged.concat(arr1, arr2);
}

// TIME COMPLEXITY
// O(n log n) log n since we are splitting the input into halves, resulting in recursive calls of n/2. Each recursive call also 
// has one iteration over its n.

// SPACE COMPLEXITY
// O(n), we create a new subarray for each element since a single element is our base case.

// Other Notes
// When dealing w/ unknown data sets, n log n is the fastest we can do to sort the data. Meaning merge sort is a very fast 
// alternative. This time can only be improved if there are some efficiency we can exploit which requires some knowledge of
// the data set. Due to its linear space complexity, we need to weigh the trade off between space vs time complexity. If
// have unlimited space or even decent amount of space, use it! If space is limited and time to spare, you might want to use 
// other sorts or analyze the data for some exploitable feature