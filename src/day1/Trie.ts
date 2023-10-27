type TrieNode = {
    value: string | null;
    children: TrieNode[];
    isWord: boolean;
}
export default class Trie {
    private length: number;
    private head: TrieNode;

    constructor() {
        this.length = 0;
        this.head = {
            value: null,
            children: [],
            isWord: false
        };
    }

    insert(item: string): void {
        let currNode = this.head;
        for (let index = 0; index < item.length; index++) {
            const char = item[index];
            const numVal = char.charCodeAt(0);
            const child = currNode.children[numVal];
            
            if(child) {
                currNode = child;
            } else {
                const newNode: TrieNode = { 
                    value: char,
                    children: [],
                    isWord: false
                };
                currNode.children[numVal] = newNode;
                currNode = newNode;
            }
        }
        currNode.isWord = true;
    }

    delete(item: string): void {

    }

    find(partial: string, index: number, currNode: TrieNode): string[] {
        const results: string[] = [];
        let charVal = partial[index].charCodeAt(0);
        //currNode.children[part]
        

        
        return results;
    }
}