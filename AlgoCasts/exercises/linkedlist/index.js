// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        const n = new Node(data,this.head);
        this.head = n;
    }
    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        if (!node)
            return node;
        // to cover the case of this.head == null;
        while (node) {
            if (node.next) {
                node = node.next;
            } else {
                return node;
            }

        }

    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head)
            this.head = this.head.next;

    }

    removeLast() {
        let node = this.head;
        while (node) {
            if (!node.next) {
                this.removeFirst();
                return;
            }

            if (!node.next.next) {
                node.next = null;
                return;
            }
            node = node.next;
        }
    }

    insertLast(data) {
        let n = new Node(data);
        let node = this.getLast();
        if (!node) {
            this.head = n;
        } else {
            node.next = n;
        }
    }

    getAt(index) {
        if ((index < 0) || (index >= this.size())) {
            return null;
        } else {
            let node = this.getFirst();
            let counter = 0;
            if (!node)
                return node;
            while (counter <= index) {
                if (counter == index)
                    return node;
                counter++;
                node = node.next;
            }

        }
    }

    removeAt(index) {
        let counter = 0;
        let prior, node, lead;
        prior = this.head;
        //If prior is not null then set node to prior.next else node = null
        ((!!prior) && (node = prior.next)) || (node = null);
        //If node is not null then set lead to node.next else lead = null
        ((!!node) && (lead = node.next)) || (lead = null);
        // If index to delete is 0 and prior is not null then set this.head to node (which maybee null) and return
        if (index === 0 && prior) {
            this.head = node;
            return;
        }

        counter++;
        while (node && counter <= index) {
            if (counter < index) {
                counter++;
                prior = prior.next;
                node = node.next;
                ((!!node) && (lead = node.next)) || (lead = null);
            } else {
                prior.next = lead;
                return;
            }
        }

    }

    insertAt(data, index) {

        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        
       
        
        const prior = this.getAt(index - 1);

        if (!prior) {
            this.insertLast(data);
            return;
        } else {
            const leading = prior.next;
            prior.next = new Node(data,leading);
        }

    }

}

// const l = new LinkedList();
//       l.removeAt(0);
//       l.removeAt(1);
//       l.removeAt(2);

// l.insertFirst('a');
// console.log(l.getAt(0).data);
//       l.removeAt(1);
//       l.removeAt(0);

// l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
// console.log(l.getAt(0).data);
// console.log(l.getAt(1).data);
// console.log(l.getAt(2).data);
// console.log(l.getAt(3).data);

// l.removeAt(0);
// console.log('removeAt(0)',l.getAt(0).data);
// l.removeAt(1);
// console.log('removeAt(1)',l.getAt(1).data);

// const l = new LinkedList();
//     console.log(null, l.getAt(10));

//     l.insertLast(1);
//     console.log(l.getLast());
//     l.insertLast(2);
//     console.log(l.getLast());
//     l.insertLast(3);
//     console.log(l.getLast());
//     l.insertLast(4);
//     console.log(l.getLast());

//     console.log(1, l.getAt(0).data);
//     console.log(2, l.getAt(1).data);
//     console.log(3, l.getAt(2).data);
//     console.log(4, l.getAt(3).data);

// import m from './kexport.js';
// import {l} from './kexport.js';
// console.log(m, l);

// need to define module as a property of window to use it in the browser

// var window = window || null;

// window && (window.module = window.module || {}); 

// module.exports = { Node, LinkedList };

// This is way simpler
try {
    module.exports = {
        Node,
        LinkedList
    };
} catch (e) {}
;