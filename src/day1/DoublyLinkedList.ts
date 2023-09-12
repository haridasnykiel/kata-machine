type DNode<T> = {
    value: T,
    next?: DNode<T>,
    prev?: DNode<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: DNode<T>;
    private tail?: DNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode: DNode<T> = { value: item };

        this.length++;

        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index cannot be greater then length.");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        curr = curr as DNode<T>;

        const newNode: DNode<T> = { value: item, next: curr, prev: curr.prev };

        curr.prev = newNode;
        
        if(newNode.prev) {
            newNode.prev.next = newNode;
        }
    }

    append(item: T): void {
        const newNode: DNode<T> = { value: item };

        this.length++;
        
        if(!this.tail) {
            this.tail = this.head = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}