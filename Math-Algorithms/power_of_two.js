// Give a positive integer `n`, determine if the number is a power of 2 or not.
// 1, 2, 4, 8, 16, 32
// function isPowerOfTwo(n){
//     if(n === 1 || n === 2){
//         return true;
//     };

//     if(n%2 !== 0){
//         return false;
//     };

//     for (let i = 2; i < n; i++) {
//         console.log('i', i);
//         if(2**i === n){
//             return true;
//         };
//     };

//     return false;
// }
// Big-O = O(logn)

// OR

// function isPowerOfTwo(n){
    // if(n < 1){
    //     return false;
    // }
//     while (n > 1) {
//         if(n%2 !== 0){
//             return false;
//         }
//         n = n/2;
//     }
//     return true;
// }

// OR

function isPowerTwoBitWise(n){
    if(n < 1){
        return false;
    };

    return (n & (n-1)) === 0;
}

// Big-O = O(logn)


console.log(isPowerTwoBitWise(1));
console.log(isPowerTwoBitWise(3));
console.log(isPowerTwoBitWise(4));
console.log(isPowerTwoBitWise(5));
console.log(isPowerTwoBitWise(32));
console.log(isPowerTwoBitWise(524288));