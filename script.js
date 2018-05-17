const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
var tempArray = [];
var storeArray = 0; // First string created from tempArray
var tempOperator = ""; // Operator as chosen on click
var secondArray; // Second string created from tempArray when 'equals' clicked
var answer;
var previousOperator = false;

// Function to clear the display and all stored values
function allClear() {
	clear.addEventListener("click", function() {
		tempArray = [];
		storeArray = 0;
		tempOperator = "";
		secondArray = 0;
		answer = 0;
		display.textContent = 0;
		previousOperator = false;
	});
};
allClear();

// Function to update the Display screen when a number is clicked.
function updateDisplay(num) {
	num.addEventListener("click", function() {
		tempArray.push(num.value);
		display.textContent = tempArray.join('');
	});
};
numbers.forEach(updateDisplay);

// Function to store initial value, operator chosen & reset temp Array.
function storeOperator(op) {
	op.addEventListener("click", function() {
		tempOperator = op.value;
		if (storeArray == 0) {
			storeArray = parseInt(tempArray.join(''));
		}	
		if (previousOperator == true) {
			secondArray = parseInt(tempArray.join(''));
			operate(tempOperator, storeArray, secondArray);
			display.textContent = answer;
			storeArray = answer;
		}
		tempArray = [];
		previousOperator = true;			
	});
};
operators.forEach(storeOperator);

// Function to assign Operator, X, & Y, and to compute when equals is pressed.
function computeAnswer() {
	equals.addEventListener("click", function() {
		secondArray = parseInt(tempArray.join(''));
		operate(tempOperator, storeArray, secondArray);
		display.textContent = answer;
		storeArray = answer; // on completion of equals, store result as first string
		previousOperator = false;
	});
};
computeAnswer();

// Initial functions for Add, Subtract, Multiply & Divide
function add(a, b) { return a + b };
function subtract(a, b) { return a - b};
function multiply(a, b) { return a * b};
function divide(a, b) { return a / b};

function operate(operator, x, y) {
	if (operator == "add") {
		answer = add(x, y);
	} else if (operator == "subtract") {
		answer = subtract(x, y);
	} else if (operator == "multiply") {
		answer = multiply(x, y);
	} else if (operator == "divide") {
		answer = divide(x, y);
	}
	return answer;
}

