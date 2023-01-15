
class Node {
    constructor(key,data) {
        this.key=key;
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}

class LL {
    // Doubly linked list
    #size;
    head;
    tail;
    #previousNode;
    constructor(){
        this.head=null;
        this.tail=null;
        this.#size=0;
        this.#previousNode=null;
    }

    add(key,value) {
        let nd=new Node(key,value);
        if (this.tail==null) [this.head,this.tail]=[nd,nd];
        else {
            this.tail.next=nd;
            nd.previous=this.tail;
            this.tail=nd;
        }    
        this.#size++;
        return nd;
    }

    bringtoTail(node) {
        // Brings a particular node to the end of list;
        if (node==this.tail) return; // exit if node is already at tail
        if (this.size<=1) return;
        if (node==this.head) {
            this.head=this.head.next;
            this.head.previous=null;
        } else {
            let prv=node.previous;
            prv.next=node.next;
            node.next.previous=prv;
        }
        this.tail.next=node;
        node.previous=this.tail;
        this.tail=node;
        this.tail.next=null;
        
    }

    deleteHead() {
        if (this.head==null) return;
        this.head=this.head.next;
        this.head.previous=null;
    }




    display() {
        let current=this.head;
        while (current) {
            console.log(current.key+" "+current.data);
            current=current.next
        }
    } 
    displayReverse() {
        let current=this.tail;
        while (current) {
            console.log(current.key+" "+current.data);
            current=current.previous;
        }
    } 
    getSize() {return this.#size;}

    

}




class lruCache {
    #mp;
    #ll;
    #cap;

    constructor(capacity) {
        this.#mp=new Map();
        this.#ll=new LL();
        this.#cap=capacity;
    }

    set(key, val) {
        if (this.#ll.tail.key==key) return;
        if (this.#mp.has(key)) this.#ll.bringtoTail(this.#mp.get(key));
        else {
            if (this.#ll.getSize()>=this.#cap) {
                this.#mp.delete(this.#ll.head.key);
                this.#ll.deleteHead();
            }
            let node=this.#ll.add(key,val);
            this.#mp.set(key,node);

        }
    }

    get(key) {
        if (this.#ll.head.key==key) return this.#ll.head.data;
        if (this.#mp.has(key)) {
            let node=this.#mp.get(key);
            this.#ll.bringtoTail(node);
            return node.data;
        } else {
            return -1;
        }
    }

}


/*let list=new LL();
list.add('001',500);
list.add('002',501);
list.add('003',503);
dd=list.add('004',504); */


let ch=new lruCache(5);
lruCache.set(1,500);




//console.table(list);
//console.log(list.getSize());
console.log("ALL OK");




