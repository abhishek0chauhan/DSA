function QuickSort(arr){
    // console.log('arr', arr);
    // console.log('rigth', right);
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        };
    }
    return [...QuickSort(left), pivot, ...QuickSort(right),]
};

console.log(QuickSort([-6, 20, 8, -2, 4]));
console.log(QuickSort([99, 25, -88, 852, 102, 74, -9, 5, 257, 63]));

// worst case - O(n2)
// Avg case - O(nlogn)