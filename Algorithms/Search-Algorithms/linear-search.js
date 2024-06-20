// Given an array of n elements and target element t, find the index of t in the array. Return if the target element is not found.

// arr = [-5, 2, 10, 4, 6], t=10 -> should return 2
// arr = [-5, 2, 10, 4, 6], t=6 -> should return 4
// arr = [-5, 2, 10, 4, 6], t=20 -> should return -1

function findNumber(array, t){
    for (let index = 0; index < array.length; index++) {
        if(array[index] === t){
            return index;
        }
    }
    return -1;
}

console.log(findNumber([-5, 2, 10, 4, 6], 6));
console.log(findNumber([-5, 2, 10, 4, 6], 20));

// Big-O = O(n)