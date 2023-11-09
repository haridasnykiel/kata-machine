
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number): number[] | null {
    
    const visited: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    walk(graph, source, needle, visited, path);
    return path.length === 0 ? null : path;
}

function walk(graph: WeightedAdjacencyList, curr: number, needle: number, visited: boolean[], path: number[]): boolean {
    
    if(curr > graph.length) {
        return false;
    }
    
    if(curr === needle) {
        path.push(curr);
        return true;
    }
    
    if(visited[curr]) {
        return false;
    }

    visited[curr] = true;
    path.push(curr);
    const edges = graph[curr];
    
    let isFound = false
    for (let idx = 0; idx < edges.length; idx++) {
        let edge = edges[idx];
        isFound = walk(graph, edge.to, needle, visited, path);
        if(isFound) 
            break;
    }
    
    if(!isFound) {
        path.pop();
    }
    
    return isFound;
}