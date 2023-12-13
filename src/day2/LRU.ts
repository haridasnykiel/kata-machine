type LruNode<V> = {
    value: V,
    next: LruNode<V> | undefined,
    prev: LruNode<V> | undefined
}

export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private head: LruNode<V> | undefined;
    private tail: LruNode<V> | undefined;
    private lookup: Map<K, LruNode<V>>;
    private reverseLookup: Map<LruNode<V>, K>;

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, LruNode<V>>();
        this.reverseLookup = new Map<LruNode<V>, K>();
    }

    update(key: K, value: V): void {
        if(!key) return;
        
        const doesNodeExist = this.lookup.has(key);
        
        if(!doesNodeExist && this.tail) {
            if(this.length + 1 > this.capacity) {
                const keyOfLastItem = this.reverseLookup.get(this.tail) as K;
                this.lookup.delete(keyOfLastItem);
                this.length--;
            }
        }
        
        let node: LruNode<V> = { next: this.head, prev: undefined, value: value} 
        if(!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            this.head = node;
        }
    
        if(!this.tail) {
            this.tail = node;
        }    
        
        this.lookup.set(key, node);
        this.reverseLookup.set(node, key);
        this.length++;
    }
    
    get(key: K): V | undefined {
        if(!key) return undefined;
        
        const node = this.lookup.get(key); 
        
        if(!node || !this.head) return undefined;
        
        if(node === this.head) return node.value;
        
        if(node === this.tail) {
            this.head.prev = node;
            this.head = node;
            this.tail = this.tail.prev;
        }
        
        if(!node.prev || !node.next) return undefined;
        
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.head.prev = node;
        this.head = node;
        return node.value;
    }
}