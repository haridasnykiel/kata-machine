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
        if (!key) return;

        let node = this.lookup.get(key);

        if (!node) {
            node = { next: this.head, prev: undefined, value: value }
            this.trimLookups()
        } else {
            this.detachNode(node);
        }

        this.prependNode(node);
        this.lookup.set(key, node);
        this.reverseLookup.set(node, key);
        this.length++;
    }

    get(key: K): V | undefined {
        if (!key) return undefined;

        const node = this.lookup.get(key);

        if (!node || !this.head) return undefined;

        if (node === this.head) return node.value;

        this.detachNode(node);
        this.prependNode(node);

        return node.value;
    }
    // need to detach the node.
    detachNode(node: LruNode<V>) {
        if (!node) return;

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if(node === this.tail) {
            this.tail = node.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    prependNode(node: LruNode<V>) {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            node.prev = undefined;
            this.head = node;
        }
    }

    trimLookups() {
        if (this.length < this.capacity) {
            return;
        }

        this.tail = this.tail as LruNode<V>;
        const keyOfLastItem = this.reverseLookup.get(this.tail) as K;
        this.lookup.delete(keyOfLastItem);
        this.reverseLookup.delete(this.tail);
        const newTail = this.tail.prev;
        this.detachNode(this.tail);
        this.tail = newTail;
        this.length--;
    }
}