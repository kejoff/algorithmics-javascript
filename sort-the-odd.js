/*
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/
function sortArray(array) {
  let indexOfArr = array.map((e, i) => ({
    index: i,
    value: e % 2 !== 0 ? e : e,
  }));

  let sortedOddValues = indexOfArr
    .filter((e) => e.value % 2 !== 0)
    .sort((a, b) => a.value - b.value)
    .map((e) => e.value);
  let oddIndex = indexOfArr.filter((e) => e.value % 2 !== 0);

  for (let i = 0; i < oddIndex.length; i++) {
    oddIndex[i].value = sortedOddValues[i];
  }

  return indexOfArr.map((e) => e.value);
}
