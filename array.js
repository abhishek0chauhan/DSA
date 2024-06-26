// An array is a data structure that can hold a collection of values
// arrays can contai a mix of different data tyoes. You ca store stings, booleans, numbers or event objects all in the same array
// arrays are resizable. you don't have to declare the size of an array before creating in in javascript
// javascript arrays are zero-indexed and the insertion oredr is maintained
// array are iterables. they can be used with a for of loop.


const arr = [1, 2, 3, 'abhishek'];


// arr.push(4); O(1)
// arr.pop(); O(1)
// arr.unshift(0); O(n)
// arr.shift(); O(n)


for(const item of arr){
    console.log(item);
}
// concat O(n)
// slice O(n)
// splice O(n)
// forEach O(n)
// map O(n)
// filter O(n)
// reduce O(n)
// map, filter, reduce, concat, slice, splice