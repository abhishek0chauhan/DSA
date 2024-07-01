class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    };
};


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    };

    isEmpty(){
        return this.size === 0;
    };

    getSize(){
        return this.size;
    };

    // O(1)
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        };
        this.size++;
    };

    // O(n)  we can achive O(1) in append by maintaing trail which points at the end of linked list.
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        };
        this.size++;
    };

    insert(value, index){
        if(index < 0 || index > this.size){
            console.log('Index is invalid');
            return;
        };
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index-1; i++) {
                prev = prev.next;
            };
            node.next = prev.next;
            prev.next = node;
            this.size++;
        };
    };

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        };
    };
};

const list = new LinkedList();
console.log('List is Empty', list.isEmpty());
console.log('List size', list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(50);
list.print();
list.insert(55, 2);
list.print();
list.insert(100, 0);
list.print();
list.insert(250, 4);
list.print();