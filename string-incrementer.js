/*
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString(str) {
  let re = /\d+/g;
  let getNumber = str.match(re);
  let isNumber = Number.isInteger(parseInt(getNumber));

  if (isNumber) {
    let nbCount = getNumber[0].length;
    let add1 = parseInt(str.slice(-nbCount)) + 1;

    if (str.slice(-nbCount).length > add1.toString().length) {
      let diff = str.slice(-nbCount).length - add1.toString().length;
      let newNb = [];
      for (i = 0; i < diff; i++) {
        newNb.push("0");
      }
      newNb.push(`${add1}`);
      return str.slice(0, -nbCount).concat(newNb.join(""));
    } else {
      return str.slice(0, -nbCount).concat(add1);
    }
  } else {
    return str.concat("1");
  }
}
