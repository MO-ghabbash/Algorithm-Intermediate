let addition = 0;
for (let i = 200; i <= 2700; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    addition = i;
  }
}
console.log(addition);

let shift = [2, 1, 6, 4, -7];
shift.reverse();

console.log(shift);

let s = [];

for (let i = 1; i < 135; i++) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    s[i] = "FizzBuzz";
  } else if (i % 3 == 0) {
    s[i] = "Fizz";
  } else if (i % 5 == 0) {
    s[i] = "Buzz";
  } else {
    s[i] = i;
  }
  s.push(s[i]);
}
console.log(s);

// const number = parseInt(prompt("1000000 "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series");

// for (let i = 1; i <= 1000000; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

var x = [1, -2, 4, 1];

for (i = 0; i < x.length; i++) {
  if (x[i] < 0) x.splice(i, 1);
}

console.log(x);

function replace(replaced) {
  let last = [];
  for (let i = 0; i < replaced.length; i++) {
    if (array[i] === "program") {
      last.push("*******");
    } else last.push(replaced[i]);
  }
  console.log(last);
}

let array = ["man", " i ", "love", "the", "matrix", "program"];
replace(array);
