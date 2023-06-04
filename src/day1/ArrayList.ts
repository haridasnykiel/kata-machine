export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: Array<T>;

    constructor(initialCapacity: number) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.arr = new Array<T>(this.capacity);
    }

    prepend(item: T): void {
        this.growArrayIfReachedCapacity(this.length + 1);

        for (let i = this.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];            
        }

        this.arr[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        this.growArrayIfReachedCapacity(this.length + 1);
        
        for (let i = this.length; i > idx; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[idx] = item;
        this.length++;
    }
    append(item: T): void {
        this.growArrayIfReachedCapacity(this.length + 1);
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        let indexOfItem = undefined;
        for (let i = 0; i < this.length; i++) {
            if(this.arr[i] === item) {
                indexOfItem = i;
                break
            }
        }

        if(indexOfItem === undefined) {
            return undefined; 
        }

        for (let i = indexOfItem + 1; i < this.length; i++) {
            this.arr[i-1] = this.arr[i];
        }

        this.length--;
        return item;
    }
    get(idx: number): T | undefined {
        if(idx > this.length || idx < 0) return undefined;

        return this.arr[idx];
    }
    removeAt(idx: number): T | undefined {
        if(idx > this.length || idx < 0) return undefined;

        var item = this.arr[idx];

        for (let i = idx + 1; i < this.length; i++) {
            this.arr[i-1] = this.arr[i];
        }

        this.length--;
        return item;
    }

    private growArrayIfReachedCapacity(length: number) {
        if(length > this.capacity) {
            this.capacity = length;
            let newArray = new Array<T>(this.capacity);
            for (let i = 0; i < this.arr.length; i++) {
                const item = this.arr[i];
                newArray[i] = item;
            }

            this.arr = newArray;
        }
    }
}