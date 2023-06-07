const directions = [{col: 1, row: 0}, {col: 0, row: 1}, {col: -1, row: 0}, {col: 0, row: -1}];
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    if(start.x > maze[start.y].length || start.y > maze.length ||
        start.x < maze[start.y].length || start.y > maze.length) 
    {
        return path;
    }

    
    
    
    
    
    // go through each direction and add the result to the path, that should cover the base case. Then Add the base case. 
    // recursive case
    path.push(start);
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        var x = start.x + direction.col;
        var y = start.y + direction.row;
        const paths = solve(maze, wall, {x, y}, end);
        
        path.concat(paths);
    }

    return path;
}