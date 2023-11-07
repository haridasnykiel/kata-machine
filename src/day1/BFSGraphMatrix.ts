export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number): number[] | null {
    // source is the starting node, needle is what we are looking for. 
    // Return the path taken to get to the needle.
    const queue: number[] = [source];
    const visited: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    
    visited[source] = true;
    
    do {
        const node = queue.shift() as number;
        const edges = graph[node];
        if(node === needle) {
            break;
        }
        
        for (let idx = 0; idx < edges.length; idx++) {
            const value = edges[idx];
            if(value === 0) {
                continue;
            }
            
            if(visited[idx]) {
                continue;
            }
            visited[idx] = true;
            prev[idx] = node;
            
            queue.push(idx);
        }
    } while (queue.length > 0)
    
    const result: number[] = [];
    let curr = needle;
    
    while(prev[curr] !== -1) {
        result.push(curr);
        curr = prev[curr];
    }
    
    if(result.length === 0) {
        return null;
    }
    
    return [source].concat(result.reverse());
}