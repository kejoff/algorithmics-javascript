/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  let arr = str.split(" ").map((e) => e.split(""));
  let end = arr.map((e) => e.splice(0, 1));
  let punc = end.map((e) =>
    !e.join().match(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g)
      ? e.concat("ay").join("")
      : e
  );
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].join("").concat(punc[i]));
  }

  return res.join(" ");
}
