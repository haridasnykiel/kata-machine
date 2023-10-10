function walk(curr: BinaryNode<number> | null, nums: number[]): number[] {
    if(!curr) {
        return nums;
    }

    walk(curr.left, nums);

    nums.push(curr.value);

    walk(curr.right, nums);

    return nums;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}