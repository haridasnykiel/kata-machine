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

        const curr = this.getAt(idx) as DNode<T>;

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
        // change the next link of the previous item to point to the removed items next node. 
        // Do the same for the removed nodes next item except so change the previous node to point to its previous node. 
        // Is the item is not found return undefined.
        // If the item is found and all the operations above are complete and the item is found return the item. 
        // If there is nothing in the list return undefined

        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if(curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if(!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const curr = this.getAt(idx) as DNode<T>;

        if(!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    private removeNode(curr: DNode<T>): T | undefined {
        this.length--;

        if(this.length === 0) {
            const deletedItem = this.head;
            this.head = this.tail = undefined;
            return deletedItem?.value;
        }

        if(curr.prev) {
            curr.prev.next = curr.next;
        }

        if(curr.next) {
            curr.next.prev = curr.prev;
        }

        curr.next = curr.prev = undefined;
        
        return curr.value;
    }

    private getAt(idx: number): DNode<T> | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }
}