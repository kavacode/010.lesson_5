const num1 = parseFloat(prompt('Enter first number'));
const num2 = parseFloat(prompt('Enter second number'));
const num3 = parseFloat(prompt('Enter third number'));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
	alert('Sorry try again');
} else {

const averege = (num1 + num2 + num3) / 3;
alert('Arithmetic mean: ' + averege);
}