function walk(curr: BinaryNode<number> | null, nums: number[]): number[] {
    if(!curr) {
        return nums;
    }
 
    nums.push(curr.value);

    walk(curr.left, nums);
    
    walk(curr.right, nums);
    

    return nums;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}