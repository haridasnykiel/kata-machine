type MinHeapNode<T> = {
    node: number,
    weight: number,
    value: T
}

export default class MinHeap<T> {
    public length: number;
    private data: MinHeapNode<T>[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: T, weight: number): void {
        const node: MinHeapNode<T> = {node: this.length, value: value, weight: weight};  

        this.data[this.length] = node;
        
        this.up(this.length)
        
        this.length++;
    }

    delete(): T {

    }

    up(idx: number): void {

        if(idx === undefined) {
            return;
        }

        const parentIdx = this.parent(idx);
        
        if(parentIdx < 0) {
            return;
        }
        
        const parent = this.data[parentIdx];
        const curr = this.data[idx];
        
        if(parent.value > curr.value) {
            this.data[parentIdx] = curr;
            this.data[idx] = parent;
            this.up(parentIdx);
        }
    }

    down(idx: number) {
        if(idx < 0) {
            return;
        }
        
        const curr = this.data[idx];
        const rightIdx = this.right(idx);
        const leftIdx = this.left(idx);
        
        let rightNode: MinHeapNode<T> | null = null;
        if(rightIdx < this.length) {
            rightNode = this.data[rightIdx];
        }
        
        let leftNode: MinHeapNode<T> | null = null;
        if(leftIdx < this.length) {
            leftNode = this.data[leftIdx];
        }
        
        if((rightNode === null || curr.value < rightNode.value) && 
            (leftNode === null || curr.value < leftNode.value)) {
            return;
        }
        
        if(rightNode === null && leftNode === null) {
            return;
        }
        
        if(rightNode === null) {
            this.data[leftIdx] = curr;
            this.data[idx] = leftNode as MinHeapNode<T>;
            this.down(leftIdx);
        }
        
        if(leftNode === null) {
            this.data[rightIdx] = curr;
            this.data[idx] = rightNode as MinHeapNode<T>;
            this.down(rightIdx);
        }
        
        rightNode = rightNode as MinHeapNode<T>;
        leftNode = leftNode as MinHeapNode<T>;
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