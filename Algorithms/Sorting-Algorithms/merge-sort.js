function MergeSort(arr){
    if(arr.length < 2){
        console.log('arr1', arr);
        return arr
    };
    console.log('arr2', arr);
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(MergeSort(leftArr), MergeSort(rightArr));
}

function merge(leftArr, rightArr){
    console.log('leftArr', leftArr);
    console.log('rightArr', rightArr);
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    console.log('sortedArr', sortedArr);
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(MergeSort([-6, 20, 8, -2, 4]));
console.log(MergeSort([99, 25, -88, 852, 102, 74, -9, 5, 257, 63]));

// Big-O = O(nlogn);