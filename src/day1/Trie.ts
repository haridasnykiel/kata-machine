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
                this.length++;
            }
        }
        currNode.isWord = true;
    }

    delete(item: string): void {

    }

    findWords(partial: string, currNode: TrieNode, words: string[], word: string): string[] {
        if(!currNode) {
            return words;
        }

        for (let index = 0; index < currNode.children.length; index++) {
            const child = currNode.children[index];
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
        for (let index = 0; index < partial.length; index++) {
            const charVal = partial[index].charCodeAt(0);
            let child = currNode.children[charVal];

            if(child) {
                currNode = child;
            }
        }
        
        const words = this.findWords(partial, currNode, [], "");
        
        return words;
    }
}