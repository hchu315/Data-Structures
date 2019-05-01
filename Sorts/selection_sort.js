function selection_sort(arr) {
  // only performs the swap after the full iteration of the inner loop

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex)
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]

  return arr;
}

// TIME COMPLEXITY
// O(n^2), nested loops when array is completely unsorted in worst case. the outer
// loop is n iteration; however, the inner loop does 1 less iteration as the left 
// side becomes sorted each full iteration, leading to n / 2 -> n * n/2 = n^2 after
// dropping the constant.
// Best case is O(n)

// SPACE COMPLEXITY
// O(1) as we mutate the array in place instead of creating a new one.

// Other Notes
// While this sort is similar to B sort in time & space complexity, it is superior
// to b sort in the sense that it makes the least amount of swap possible, while
// only doing the swap after the full iteration and where it has obtained the index
// of the smallest #. Therefore, selection is useful in scenarios where the swapping
// operation is the costliest (e.g. fast read speeds and slow write speeds system)