function add(num1,num2) {
  return num1 + num2 ;
}
console.log(add(10,10))

function subtract(num1,num2) {
    return num1 - num2;
}
console.log(subtract(5,4))

function multiply(num1,num2) {
    return num1 * num2;
}
console.log(multiply(20,4))

function divide(num1,num2) {
    return num1 / num2;
}
console.log(divide(20,4))

function increment(n) {
    return n += 1
}
console.log(decrement(1))

function decrement(n) {
    return n -= 1
}
console.log(decrement(1))


function makeInt(n) {
    return parseInt(n,10)
}
console.log(makeInt("5"))

function  preserveDecimal(n) {
    return parseFloat(n)
}
console.log(preserveDecimal("12.656568865"))