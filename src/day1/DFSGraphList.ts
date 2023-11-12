
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
    
    if(visited[curr]) {
        return false;
    }

    path.push(curr);
    
    if(curr === needle) {
        return true;
    }

    visited[curr] = true;
    const edges = graph[curr];
    
    for (let idx = 0; idx < edges.length; idx++) {
        let edge = edges[idx];
        
        if(walk(graph, edge.to, needle, visited, path)) 
            return true;
    }
    
    path.pop();
    
    return false;
}