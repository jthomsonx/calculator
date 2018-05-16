const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

numbers.forEach(num => {
	num.addEventListener("click", function() {
		display.textContent = num.value;
	});
});

// Function to update the Display screen when a number is clicked.
function updateDisplay() {

}

// Initial functions for Add, Subtract, Multiply & Divide
function add(a, b) { return a + b };
function subtract(a, b) { return a - b};
function multiply(a, b) { return a * b};
function divide(a, b) { return a / b};

console.log(add(6,2));
console.log(subtract(6,2));
console.log(multiply(6,2));
console.log(divide(6,2));

function operate(operator, x, y) {
	if (operator == "add") {
		return add(x, y);
	} else if (operator == "subtract") {
		return subtract(x, y);
	} else if (operator == "multiply") {
		return multiply(x, y);
	} else if (operator == "divide") {
		return divide(x, y);
	}
}
console.log(operate("multiply", 4, 2));

console.log(display.textContent);
console.log(numbers);
console.log(clear);
