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
        for (const element of item) {
            const char = element;
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
                this.length++;
            }
        }
        currNode.isWord = true;
    }

    deleteWord(word: string, currNode: TrieNode, parentNode: TrieNode) : void {
        if(!currNode) {
            return;
        }
        
        
    }
    
    delete(item: string): void {
        let parentNode: TrieNode = this.head;
        let currNode: TrieNode = this.head;
        for (const element of item) {
            const numVal = element.charCodeAt(0);
            const child = currNode.children[numVal];

            if (!child) {
                return;
            }

            parentNode = currNode;
            currNode = child;
        }
        
        this.deleteWord(item, currNode, parentNode);
    }

    findWords(partial: string, currNode: TrieNode, words: string[], word: string): string[] {
        if(!currNode) {
            return words;
        }

        for (const element of currNode.children) {
            const child = element;
            if(!child) {
                continue;
            }
            word = word === '' ? partial + child.value : word + child.value;
            if(child.isWord) {
                words.push(word);
            }

            this.findWords(partial, child, words, word);
        }

        return words;
    }

    find(partial: string): string[] {        
        let currNode = this.head;
        
        for (const element of partial) {
            const charVal = element.charCodeAt(0);
            let child = currNode.children[charVal];

            if(child) {
                currNode = child;
            }
        }
        
        const words = this.findWords(partial, currNode, [], "");
        
        return words;
    }
}