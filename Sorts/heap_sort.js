function heap_sort(array) {
// build the heap
  let heap = new MaxHeap();
  array.forEach(element => {
    heap.insert(element);
  });

// construct the sorted array
  let sorted = [];
  while (heap.array.length > 1) {
    sorted.push(heap.deleteMax());
  }

  return sorted;
}

// TIME COMPELXITY
// TC is O(n log n) where n is the creation of the new heap from the array. The while loop iterates n times for n and
// log n is the act of sifting down for fetching (n log n) => O(n + n log n) => O(n log n) 

// SPACE COMPLEXITY
// SC is O(n) where a new sorted array is created separted from the heap array. An in-place version could be implemented for
// constant space

// Other Notes
// IN-PLACE HEAP SORT
// Heapify is turning an array into a heap in-place or otherwise

function swap(array, i, j) {
  [ array[i], array[j] ] = [ array[j], array[i] ]; 
}

// heapify use a lot of the logic of MaxHeap#siftdown
function heapify(array, n, i) {
  let leftIdx = i * 2 + 1;
  let rightIdx = i * 2 + 2;

  let leftChildVal = array[leftIdx];
  let rightChildVal = array[rightIdx];
  
  if (leftIdx >= n) leftChildVal = -Infinity;
  if (rightIdx >= n) rightChildVal = -Infinity;

  if (leftChildVal < array[i] && rightChildVal < array[i]) return;

  let swapIdx;
  if (leftChildVal > rightChildVal) {
    swapIdx = leftChildVal;
  } else {
    swapIdx = rightChildVal;
  }
  
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

// call heapify on the the children nodes first to turn it into a max heap
function heapSort(array) {

  //turns array into heap
  for (let i = array.length - 1; i >= 0; i--) {
    let heap = heapify(array, array.length, i)
  }

  //creates sorted region on the right, growing it leftwards as unsorted region shrinks
  for (let endHeap = heap.length - 1; i >= 0; endHeap--) {
    // let maxVal = heap.shift();
    swap(heap, 0, endHeap);
    heapify(heap, endHeap, 0)
  }

  return heap;
}

