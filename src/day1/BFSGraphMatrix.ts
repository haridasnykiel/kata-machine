export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number): number[] | null {
    // source is the starting node, needle is what we are looking for. 
    // Return the path taken to get to the needle.
    const queue: number[] = [source];
    const visited: boolean[] = [true];
    const path: number[] = [0];
    do {
        const node = queue.shift() as number;
        const edges = graph[node];
        if(node === needle) {
            break;
        }
        for (let idx = 0; idx < edges.length; idx++) {
            const value = edges[idx];
            if(visited[idx]) {
                continue;
            }
            visited[idx] = true;
            path[idx] = value;
            if(value > 0) {
                queue.push(idx);
            }
        }
    } while (queue.length > 0)
    
    return path;
}