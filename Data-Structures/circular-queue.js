/*
The size of the circcular queue is fixed and a single block of memory is used as if the first element is connected to the last element

Also refred to as circular buffer or ring buffer and follows FIFO principle.

usage

Streaming data
Tarffic lights
clock
*/

class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    };

    isFull(){
        return this.currentLength === this.capacity;
    };

    isEmpty(){
        return this.currentLength === 0;
    };

    enqueue(element){
        // console.log('eme', element);
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            // console.log('this.rear', this.rear);
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    };

    dequeue(){
        if(!this.isEmpty()){
            let item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            // console.log('this.front', this.front);
            this.currentLength -= 1;
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1;
            };
            return item;
        };
        return null;
    };

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        };
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is empty');
        }else{
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            };
            str += this.items[i];
            console.log(str);
        };
    };
};

const queue1 = new CircularQueue(5);

console.log(queue1.isEmpty());

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);

console.log(queue1.isFull());
queue1.print();

queue1.dequeue();
queue1.print();
console.log(queue1.peek());
queue1.enqueue(60);
queue1.print();