const rank = Number(prompt("Please enter nth number: "));
let number1 = 1;
let number2 = 2;
let fiboSequence = [number1, number2];
for (let i = 0; i < rank; i++) {
  number2 = number1 + number2;
  number1 = number2 - number1;
  fiboSequence.push(number2);
}
console.log(fiboSequence[rank - 1]);
