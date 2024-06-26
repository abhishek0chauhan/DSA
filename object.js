// an object is an unordered collection of key value pairs. the key must either be a string or symbol data type where as the value can be of any data type


const obj = {
    name: 'Abhishek',
    age: 25,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name);
    }
}

obj.hobby = 'cricket'
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
obj.sayMyName();

// Object.keys  O(n), .values()  O(n), .entries()  O(n)
