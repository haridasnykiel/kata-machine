export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {
    
    const visited: boolean[] = new Array(arr.length).fill(false);
    const previous: number[] = new Array(arr.length).fill(-1);
    const distances: number[] = new Array(arr.length).fill(Infinity);
    
    distances[source] = 0;
    
    while (visited.includes(false)) {
        const lowestEdgeNotVisited = arr[source]
    }
}

function getSmallestDistanceUnvisitedEdge(visited: number[], distances: number[]): GraphEdge {
}