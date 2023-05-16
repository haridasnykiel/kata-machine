export default function two_crystal_balls(breaks: boolean[]): number {
    const squareRootOfLength = Math.floor(Math.sqrt(breaks.length));
    let jmpAmount = squareRootOfLength;
    let i  = jmpAmount;

    for (; i < breaks.length; i += squareRootOfLength) {
        if(breaks[i]) {
            break;
        }
    }

    i = i - jmpAmount;

    for (; i < breaks.length; i++) {        
        if(breaks[i]) {
            return i;
        }
    }

    return -1;
}