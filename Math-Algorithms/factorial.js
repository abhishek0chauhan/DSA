// Give an integer `n`, find the factorial of that integer


function factorial(n){
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = i * result;
    }
    return result;
}

console.log(factorial(5));

// Big-O = O(n)