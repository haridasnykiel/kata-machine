type Node<T> = {
    value: T,
    next?: Node<T>
}
export default class Queue<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        let node: Node<T> = {value: item};

        if(this.head === undefined) {
            this.head = node;
        }

        if(this.tail === undefined) {
            this.tail = node;
            this.length += 1;
            return;
        }

        this.tail.next = node;

        this.tail = node;
        this.length += 1;
    }
    deque(): T | undefined {
        if(this.length <= 0) {
            return undefined;
        }

        if(this.head === undefined) {
            return undefined;
        }

        let result = this.head;
        let nextNode = this.head.next;
        this.head.next = undefined;
        this.head = nextNode;
        this.length -= 1;
        return result.value;
    }
    peek(): T | undefined {
        if(this.head === undefined) {
            return undefined;
        }

        return this.head.value;
    }
}