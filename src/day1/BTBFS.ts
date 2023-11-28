export default function bfs(node: BinaryNode<number> | null, needle: number): boolean {
    const q = [node];

    while (q.length) {
        var i = q.shift() as BinaryNode<number> | null;

        if (!i) { continue; }


        if (i.value === needle) {
            return true;
        }

        q.push(i.left);
        q.push(i.right);
    }

    return false;
}