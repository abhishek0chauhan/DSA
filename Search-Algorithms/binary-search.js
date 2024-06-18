// Given an sorted array of n elements and target element t, find the index of t in the array. Return if the target element is not found.

// arr = [-5, 2, 4, 6, 10], t=10 -> should return 2
// arr = [-5, 2, 4, 6, 10], t=6 -> should return 4
// arr = [-5, 2, 4, 6, 10], t=20 -> should return -1

function BinarySearch(arr, target){
    let leftIndex = 0;
    let rigthIndex = arr.length - 1;

    while (leftIndex <= rigthIndex) {
        let middleIndex = Math.floor(leftIndex + rigthIndex);
        if(arr[middleIndex] === target){
            return middleIndex;
        };
        if(target < arr[middleIndex]){
            rigthIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1; 
        };
    };
    return -1;
};

console.log(BinarySearch([-5, 2, 4, 6, 10], 10));
console.log(BinarySearch([-5, 2, 4, 6, 10], 2));
console.log(BinarySearch([-5, 2, 4, 6, 10], 20));
console.log(BinarySearch([-5, 2, 4, 6, 10], -5));

// Big-O = O(logn)