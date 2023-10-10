function walk(curr: BinaryNode<number> | null, nums: number[]): number[] {
    if(!curr) {
        return nums;
    }

    walk(curr.left, nums);
    
    walk(curr.right, nums);
    
    nums.push(curr.value);

    return nums;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}