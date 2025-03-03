function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}



function getFactorial() {
    const input = parseInt(prompt("Enter an integer: "), 10);
    if (isNaN(input)) {
        console.log("Please enter a valid integer.");
    } else {
        console.log(`The factorial of ${input} is ${factorial(input)}`);
    }
}

getFactorial();