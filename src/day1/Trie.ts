type TrieNode = {
    value: string | null;
    parent: TrieNode | null;
    children: TrieNode[];
    isWord: boolean;
}
export default class Trie {
    private readonly head: TrieNode;

    constructor() {
        this.head = {
            value: null,
            parent: null,
            children: [],
            isWord: false
        };
    }

    insert(item: string): void {
        let currNode = this.head;
        let parentNode = this.head;
        for (const element of item) {
            const char = element;
            const numVal = char.charCodeAt(0);
            const child = currNode.children[numVal];
            
            if(child?.value) {
                currNode = child;
                parentNode = currNode;
            } else {
                const newNode: TrieNode = { 
                    value: char,
                    parent: parentNode,
                    children: [],
                    isWord: false
                };
                currNode.children[numVal] = newNode;
                currNode = newNode;
                parentNode = currNode;
            }
        }
        currNode.isWord = true;
    }

    private deleteWord(word: string, wordIndex: number, currNode: TrieNode) : void {
        if(!currNode) {
            return;
        }
        
        const hasChild = currNode.children.some(v => v?.value !== null);
        
        if(hasChild) {
            currNode.isWord = false;
            return;
        }
        
        wordIndex--;
        
        if(wordIndex < 0) {
            return;
        }
        
        const val = currNode.value as string;
        const numVal = val.charCodeAt(0);
        
        const parent = currNode.parent as TrieNode;

        parent.children[numVal] = {children: [], parent: currNode.parent, isWord: false, value: null};

        if(parent.isWord) {
            return;
        }

        this.deleteWord(word, wordIndex, parent);
    }
    
    delete(item: string): void {
        let currNode: TrieNode = this.head;
        for (const element of item) {
            const numVal = element.charCodeAt(0);
            const child = currNode.children[numVal];

            if (!child) {
                return;
            }
            currNode = child;
        }
        
        this.deleteWord(item, item.length - 1,  currNode);
    }

    private findWords(partial: string, currNode: TrieNode, words: string[], word: string): string[] {
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