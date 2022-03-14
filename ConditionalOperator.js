// Use the Conditional (Ternary) Operator
// One line if else Expression 
// Condition ? statement-if-true : statement-if-false

function checkEqual(a, b) {
    
    // Using Ternary Operator
    return a === b ? true : false;
}

console.log(checkEqual(1, 2));


// Use Multiple conditional (Ternary) Operators
function checkSign(num) {

    return num > 0 ? "Postive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkSign(0));

