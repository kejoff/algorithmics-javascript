/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input

    customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

## output

The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
  let arr = [];

  if (customers.length === 0) {
    return 0;
  } else if (customers.length < n) {
    return Math.max(...customers);
  } else {
    for (let i = 0; i < customers.length; i++) {
      if (i < n) {
        arr[i] = customers[i];
      } else {
        arr = arr.sort((a, b) => a - b);
        arr[0] += customers[i];
      }
    }
  }
  return Math.max(...arr);
}
