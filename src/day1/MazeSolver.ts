const directions = [{col: 1, row: 0}, {col: 0, row: 1}, {col: -1, row: 0}, {col: 0, row: -1}];
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];

    // go through each direction and add the result to the path, that should cover the base case. Then Add the base case. 
}