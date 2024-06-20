// Give a number `n`, find the first 'n' elements of the Fibonacci sequence.

// fibonacci(2) = [0, 1];
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8];

let fibonacci = function(n){
    let resultArr = [0, 1];

    // for (let index = n-2; index > 0; index--) {
    //     resultArr.push(resultArr[resultArr.length-1]+resultArr[resultArr.length-2]);
    // }

    // OR

    for(let i = 2; i < n; i++){
        resultArr[i] = resultArr[i-1] + resultArr[i-2];
    }

    return resultArr;
}

console.log(fibonacci(7));

// Big-O = O(n)

