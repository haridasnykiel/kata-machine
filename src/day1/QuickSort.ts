function partition(arr: number[], lp: number, rp: number) : number {
    let pivotIndex = rp;

    let pivot = arr[pivotIndex];

    rp = pivotIndex - 1;

    while(true) {

        while(arr[lp] < pivot) {
            lp += 1;
        }

        while(arr[rp] > pivot) {
            rp -= 1;
        }
        
        let tmp = arr[lp];

        if(lp >= rp) {
            arr[lp] = pivot;
            arr[pivotIndex] = tmp;
            break;
        } else {
            arr[lp] = arr[rp];
            arr[rp] = tmp;
            continue;
        }
    }

    return lp;
}

function qsort(arr: number[], lp: number, rp: number)  
{
    if(rp <= lp) {
        return;
    }

    var sortedIndex = partition(arr, lp, rp);

    qsort(arr, 0, sortedIndex - 1);
    qsort(arr, sortedIndex + 1, rp); 
}

export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1);
}