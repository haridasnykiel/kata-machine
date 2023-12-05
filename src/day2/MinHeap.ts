export type MinHeapNode = {
    from: number,
    to: number,
    weight: number,
}

export default class MinHeap {
    public length: number;
    private data: MinHeapNode[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(from: number, to: number, weight: number): void {
        const node: MinHeapNode = {from: from, to: to, weight: weight};  

        this.data[this.length] = node;
        
        this.up(this.length)
        
        this.length++;
    }

    delete(): MinHeapNode | null {
        
        if(this.length <= 0) {
            return null;
        }
        
        const rootVal = this.data[0];

        const lastNode = this.data[this.length - 1]

        this.data[0] = lastNode;

        this.down(0);

        this.length--;

        return rootVal;
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
        
        if(parent.weight > curr.weight) {
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
        
        let rightNode: MinHeapNode | null = null;
        if(rightIdx < this.length) {
            rightNode = this.data[rightIdx];
        }
        
        let leftNode: MinHeapNode | null = null;

        if(leftIdx < this.length) {
            leftNode = this.data[leftIdx];
        }

        if(rightNode === null && leftNode === null) {
            return;
        }

        if((rightNode === null || curr.weight < rightNode.weight) && 
            (leftNode === null || curr.weight < leftNode.weight)) {
            return;
        }
        
        rightNode = rightNode as MinHeapNode;
        leftNode = leftNode as MinHeapNode;

        if((rightNode === null) || (leftNode.weight < rightNode.weight)) {
            this.data[leftIdx] = curr;
            this.data[idx] = leftNode as MinHeapNode;
            this.down(leftIdx);
        } else if((leftNode === null) || (rightNode.weight < leftNode.weight)) {
            this.data[rightIdx] = curr;
            this.data[idx] = rightNode as MinHeapNode;
            this.down(rightIdx);
        }
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