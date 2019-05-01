function bubble_sort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1)
        swapped = true;
      }
    } 
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]

  return arr;
  // does not create or return a new array. it mutates the original array
}

// TIME COMPLEXITY
// O(n^2), worst case due to the nested loop (while and for), and if the array is
// completely unsorted. Best case is O(n) if completely sorted and only the inner
// for loop has to run thru the array and the while will cease after one iteration.
// That is better than all other sorting algorithms' best case but we are worried
// about the worst cases.


// SPACE COMPLEXITY
// O(1), the memory consumed by this algorithm does not increase relative to size;
// this is due to the fact that it sorts the array in place, rather than creating a
// new one

// Other Notes
// B sort is good for nearly sorted arrays, or small input sizes where the run time
// will be indifferent regardless of the sorting method. You will probably never use
// it otherwise