// sorts left region one element at a time, an element is
// taken and sorted to the left side and inserted when its
// larger than the compared element

function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) { // starts @ 1 since first ele considered sorted
    let currElement = arr[i] // hold onto the element before sorted
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      // used var in this loop so j is still defined when loop ends
      arr[j+1] = arr[j] // move ele fwd by 1 idx
    }
    arr[j+1] = currElement
  }

  return arr;
}


// TIME COMPLEXITY
// O(n^2), outer loop iterates over n elements, and inner is n/2
// as it iterates progressively more times as left side gets more
// sorted. O(n) for a nearly sorted array

// SPACE COMPLEXITY
// O(1) as we mutate the array in place

// Other Notes
// Insertion sorted is an "online" algorithm. It is best for
// sorting streaming data, where data are constantly added and 
// not final (e.g. sorting relevant posts in a social media feed)
// The left side would always be sorted already and in the case
// of nearly sorted array, the algo runs in linear time.
// Otherwise, it has the same use cases as B sort