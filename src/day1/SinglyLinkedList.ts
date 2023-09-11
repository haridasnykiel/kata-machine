type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    tail?: Node<T>;
    head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        let node: Node<T> = { value: item };

        if(this.head !== undefined) {
            node.next = this.head;
        }
 
        this.head = node;
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        let node: Node<T> = { value: item };

        this.length += 1;

        if(this.head === undefined && this.tail === undefined) {
            this.head = node;
            this.tail = node;
            return;
        }

        if(idx >= this.length && this.tail !== undefined) {
            this.tail.next = node;
            this.tail = node;
            return;
        }

        let nextNode = this.head?.next;
        let previousNode = this.head;
        for (let index = 1; index < this.length; index++) {
            
            if(index === idx && previousNode !== undefined) {
                node.next = nextNode
                previousNode.next = node
                return;
            }

            previousNode = previousNode?.next;
            nextNode = nextNode?.next;
        }
    }
    append(item: T): void {
        let node: Node<T> = { value: item };

        if(this.tail !== undefined) {
            this.tail.next = node;
        }

        if(this.head === undefined) {
            this.head = node; 
        }
 
        this.tail = node;
        this.length += 1;
    }
    remove(item: T): T | undefined {
        if(this.head === undefined && this.tail === undefined) {
            return undefined;
        }

        if(this.head?.value === item) {
            var nextNode = this.head.next;
            var firstNode = this.head;
            this.head.next = undefined;
            this.head = nextNode;
            this.length -= 1;
            return firstNode.value;
        }

        let currentNode = this.head?.next;
        let previousNode = this.head;
        for (let i = 1; i < this.length; i++) {

            if(currentNode?.value === item && previousNode !== undefined && currentNode !== undefined) {
                var value = currentNode.value;
                var nextNode = currentNode.next;
                previousNode.next = nextNode;
                currentNode.next = undefined;
                this.length -= 1;
                return value;
            }

            currentNode = currentNode?.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        let currentNode = this.head;

        if(idx > this.length) {
            return undefined;
        }

        for (let i = 0; i < this.length; i++) {
           if(i === idx) {
                return currentNode?.value;
           }
            
           currentNode = currentNode?.next;
        }

        return undefined;
    }
    removeAt(idx: number): T | undefined {
        
        if(idx > this.length) { 
            return undefined;
        }

        if(idx === 0 && this.head !== undefined) {
            var nextNode = this.head.next;
            var firstNode = this.head;
            this.head.next = undefined;
            this.head = nextNode;
            this.length -= 1;
            return firstNode.value;
        }

        let currentNode = this.head?.next;
        let previousNode = this.head;
        for (let i = 1; i < this.length; i++) {

            if(i === idx && previousNode !== undefined && currentNode !== undefined) {
                var value = currentNode.value;
                var nextNode = currentNode.next;
                previousNode.next = nextNode;
                currentNode.next = undefined;
                this.length -= 1;
                return value;
            }

            currentNode = currentNode?.next;
        }

        
        return undefined;
    }
}