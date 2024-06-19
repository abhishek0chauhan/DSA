// Given an array of integers, sort the array.

// const arr = [-6, -2, 4, 8, 20]

// Bubble sort is  poor sort algorithm and we are not use this in real life scenario.

// Defination -> compare adjacent elemnts in the array and swap the positions if they are not in the intended order. while comparing make soure in the left side of array alway samll number is there after swap and so on.

function BubbleSort(arr){
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length -1 ; j++) {
            const firstIndex = j;
            const secondIndex = j+1;
            if(arr[firstIndex] > arr[secondIndex]){
                // arr[firstIndex] = arr[firstIndex] + arr[secondIndex];
                // arr[secondIndex] = arr[firstIndex] - arr[secondIndex];
                // arr[firstIndex] = arr[firstIndex] - arr[secondIndex];

                // OR

                let temp = arr[firstIndex];
                arr[firstIndex] = arr[secondIndex];
                arr[secondIndex] = temp;
            };
        }
    }
    return arr;
}

console.log(BubbleSort([-6, 8, 20, -2, 4]));
console.log(BubbleSort([99, 25, -88, 852, 102, 74, -9, 5, 257, 63]));

// Big-O = O(n2);