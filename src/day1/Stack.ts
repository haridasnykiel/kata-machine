type Node<T> = {
    value: T,
    previous?: Node<T>
}

export default class Stack<T> {
    public length: number;
    head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length += 1;

        let node: Node<T> = {value: item};
        
        if(!this.head) {
            this.head = node;
            return;
        }

        node.previous = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length -= 1;

        let head = this.head;
        this.head = head.previous;
        head.previous = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}