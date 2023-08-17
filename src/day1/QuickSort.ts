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

function partitionv2(arr: number[], lo: number, hi: number) {
    let pivot = arr[hi];
     
    let idx = lo - 1;

    for (let index = lo; index < hi; index++) {
        if(arr[index] <= pivot) {
            idx++;
            let tmp = arr[index];
            arr[index] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qsort(arr: number[], lp: number, rp: number)  
{
    if(rp <= lp) {
        return;
    }

    var sortedIndex = partitionv2(arr, lp, rp);

    qsort(arr, 0, sortedIndex - 1);
    qsort(arr, sortedIndex + 1, rp); 
}

export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1);
}