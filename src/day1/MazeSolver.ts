const directions = [{col: 1, row: 0}, {col: 0, row: 1}, {col: -1, row: 0}, {col: 0, row: -1}];
let isEndFound = false;
export default function solve(
    maze: string[], 
    wall: string, 
    curr: Point, 
    end: Point, 
    visited: boolean[][],
    path: Point[]): Point[] 
{
    if(curr.y > maze.length || 
        curr.x > maze[curr.y].length ||
        curr.x < 0 || 
        curr.y < 0) 
    {
        return path;
    }

    if(maze[curr.y][curr.x] === wall) 
    {
        return path;
    }

    if(!!visited[curr.y]) 
    {
        if(!!visited[curr.y][curr.x]) {
            return path;
        }
    }
    else {
        visited[curr.y] = [];
    }

    path.push(curr);
    visited[curr.y][curr.x] = true;

    if(curr.y === end.y && curr.x === end.x) 
    {
        isEndFound = true;
        return path;
    }

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        var x = curr.x + direction.col;
        var y = curr.y + direction.row;
        
        if(isEndFound) break;
        
        solve(maze, wall, {x, y}, end, visited, path);
    }

    return path;
}