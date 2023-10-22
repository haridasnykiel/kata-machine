export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.length++;
        
        this.data.push(value);
        
        this.bubbleUp(this.length - 1);
    }

    delete(): number {
        if(this.length === 0) {
            return -1;
        }
        
        this.length--;
        
        if(this.length === 1) {
            return this.data.shift() as number;
        }
        
        const root = this.data[0];
        this.data[0] = this.data.pop() as number;
        
        this.bubbleDown(0);
        
        return root;
    }
    
    private bubbleDown(idx: number): void {
        const rightChildIdx = this.getRightChild(idx);
        const leftChildIdx = this.getLeftChild(idx);
        
        if(leftChildIdx >= this.length || idx >= this.length) {
            return;
        }
        
        const rightChildVal = this.data[rightChildIdx];
        const leftChildVal = this.data[leftChildIdx];
        const currVal = this.data[idx];
        
        if(currVal < leftChildVal && currVal < rightChildVal ||
            (rightChildVal === -1 && leftChildVal === -1)) {
            return;
        }
        
        if(leftChildVal < rightChildVal) {
            this.swap(idx, leftChildIdx, currVal, leftChildVal);
            this.bubbleDown(leftChildIdx);
        } else {
            this.swap(idx, rightChildIdx, currVal, rightChildVal);
            this.bubbleDown(rightChildIdx);
        }
    }
    
    private bubbleUp(idx: number): void {
        if(idx === 0)  {
            return;
        }
        
        const parentIdx = this.getParent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];
        
        if(value < parentValue) {
            this.swap(idx, parentIdx, value, parentValue);
            this.bubbleUp(parentIdx);
        }
    }

    private swap(currIdx: number, swapIdx: number, currVal: number, swapVal: number): void {
        if(swapVal === -1) {
            return;
        }
        this.data[swapIdx] = currVal;
        this.data[currIdx] = swapVal;
    }

    private getParent(index: number) {
        return Math.floor((index - 1) / 2);   
    }

    private getLeftChild (index: number) {
        return (index * 2) + 1;
    }

    private getRightChild (index: number) {
        return (index * 2) + 2;
    }
}