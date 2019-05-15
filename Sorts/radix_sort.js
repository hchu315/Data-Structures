function radix_sort() {

}

// RADIX helper functions

// what value is in the particular place of the num?
function getDigitFrom(num, place) {
  let digit;

  

  return digit;
}

// how many digits are in num?
function getIntLength(num) {

}

// how many digits are in the longest num?
function getMaxDigits(nums) {
  let longest = 1;

  nums.forEach(element => {
    let length = element.toString().length;

    if (length > longest) longest = length;
  });
}