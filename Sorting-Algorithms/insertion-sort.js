function InsertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let sortedIndex = i-1;
        while(sortedIndex >= 0 && arr[sortedIndex] > numberToInsert){
            arr[sortedIndex+1] = arr[sortedIndex];
            sortedIndex = sortedIndex-1;
        }
        arr[sortedIndex+1] = numberToInsert;
    };
    return arr;
};

console.log(InsertionSort([-6, 20, 8, -2, 4]));
console.log(InsertionSort([99, 25, -88, 852, 102, 74, -9, 5, 257, 63]));

// Big-O = O(n2);