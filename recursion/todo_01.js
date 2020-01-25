// To Do 1
// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function recSigma(val) {
    if (val === 0) {
        return 0;
    }
    // console.log(val);
    return val + recSigma(val - 1);
}

console.log(recSigma(5));



// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function recFactorial(val) {
    val = Math.floor(val);
    if (val <= 1) {
        return 1;
    }
    return (val * recFactorial(val - 1));
}

console.log(recFactorial(3));
console.log(recFactorial(6.5));