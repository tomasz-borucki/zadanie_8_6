var a = prompt('Enter var a');
var b = prompt('Enter var b');
var value = (a * a) - (2 * a * b) + (b * b);
alert('Result : ' + value);
console.log('result: ' + value)
if (value > 0) {
  console.log('result is bigger than zero')
} else if (value < 0) {
  console.log('result is less than zero')
} else {
  console.log('result the result equals zero')
}

