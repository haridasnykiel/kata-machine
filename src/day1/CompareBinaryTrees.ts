// export default function compare(a: BinaryNode<number> | null | undefined, b: BinaryNode<number> | null | undefined): boolean {
//     if(a?.value !== b?.value) {
//         return false;
//     }
    
//     let result: boolean = true;

//     if(a?.left !== null) {
//         result = compare(a?.left, b?.left);
//     }

//     if(a?.right !== null) {
//         result = compare(a?.right, b?.right);
//     }
    
//     return result;
// }


export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if(a === null && b === null) {
        return true;
    }

    // this is a structural check
    if(a === null || b === null) {
        return false;
    }

    // this checks the values
    if(a.value !== b.value) {
        return false;
    }
    
    return compare(a.left, b.left) && compare(a.right, b.right);
}