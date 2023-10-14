export default function bfs(head: BinaryNode<number> | null, needle: number): boolean {
    const q = [head];

    while (q.length) {
        var item = q.shift() as BinaryNode<number> | null;

        if(!item) {
            continue;
        }

        if(item.value === needle) {
            return true;
        }

        q.push(item.left);
        q.push(item.right);
    }

    return false;
}