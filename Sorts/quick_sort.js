function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  // let midIndex = Math.ceil(arr.length / 2)
  let pivot = arr.shift();

  arr.forEach(element => { // could use array.filter here instead to partition left and right subarrays
    if (element >= pivot) {
      right.push(element)
    } else {
      left.push(element)
    }
  });

  return [...quick_sort(left), pivot, ...quick_sort(right)]
}

// TIME COMPLEXITY
// AVG case is O(n log n), each call of quicksort is linear runtime due to forEach iteration for the array partition. There are 
// log n recursive call stacks since we are splitting the arrays into 2 subarrays every recursive call, and each 
// recursive call itself has 2n runtime as explained above, which leads to n log n

// WORST case is O(n^2), this is due to the fact that the pivot chosen to partition the left and right arrays could be the
// min or max value of the data which leads the array being sorted by one element everytime leading to n recursive calls
// and n partition time => n^2. However, this scenario is considered exceedingly rare; therefore, quicksort is still
// considered an efficient sorting algo at O(n log n)

// SPACE COMPLEXITY
// O(n log n), there are n partition arrays that takes up space since the base case is a single element or empty array. the recursive
// call stack from quicksort is log n, leading to n log n space complexity
// O(log n), AVG case scenario where a non-min/max value is chosen as pivot and this is generally the case since the worst case
// scenario is incredibly rare

// Other Notes