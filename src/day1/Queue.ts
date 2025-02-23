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
        this.length += 1;

        if(!this.tail || !this.head) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length -= 1;

        let head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}