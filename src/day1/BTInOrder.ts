export default function in_order_search(head: BinaryNode<number> | null): number[] {
    let numbers: number[] = [];
    
    if(!head) {
        return numbers;
    }

    numbers = numbers.concat(in_order_search(head.left));

    numbers.push(head.value);

    numbers = numbers.concat(in_order_search(head.right));

    return numbers;
}