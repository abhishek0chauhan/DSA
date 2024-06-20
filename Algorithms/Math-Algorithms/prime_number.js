// Give a natural number `n`, determine i the number is prime or not

// isPrime(5) = true (1*5 or 5*1)

// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(number){
    if(number < 2){
        return false;
    }

    // for (let i = 2; i < number; i++) {
    //     if(number%i === 0){
    //         return false;
    //     }
    // }
    // Big-O = O(n)

    // OR
    // Otimize
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number%i === 0){
            return false;
        }
    }
    // Big-O = O(sqrt(n))
    return true;
}

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(9));
