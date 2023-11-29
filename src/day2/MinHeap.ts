type MinHeapNode<T> = {
    node: number,
    weight: number,
    value: T
}

export default class MinHeap<T> {
    public length: number;
    private data: MinHeapNode<T>[];
    private lastNode: MinHeapNode<T>;
    private rootNode: MinHeapNode<T>;

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: T): void {

    }

    delete(): T {

    }

    up(): void {

        if(this.lastNode === undefined) {
            return;
        }

        const parentIdx = this.parent(this.length - 1);
        const parent = this.data[parentIdx];

        

    }

    left(idx: number): number {
        return idx * 2 + 1;
    }

    right(idx: number): number {
        return idx * 2 + 2;
    }

    parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
}