import MinHeap from "../day1/MinHeap";

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {

    const visited: boolean[] = new Array(arr.length).fill(false);
    const previous: number[] = new Array(arr.length).fill(-1);
    const distances: number[] = new Array(arr.length).fill(Infinity);

    distances[source] = 0;

    while (visited.includes(false)) {
        const smallestEdgeNotVisited = getSmallestDistanceUnvisitedEdge(visited, distances);
        visited[smallestEdgeNotVisited] = true;
        
        const node = arr[smallestEdgeNotVisited];
        for (let index = 0; index < node.length; index++) {
            let edge = node[index];
            if(visited[edge.to]) continue;
            let dist = distances[smallestEdgeNotVisited] + edge.weight;

            if(dist < distances[edge.to]) {
                previous[edge.to] = smallestEdgeNotVisited;
                distances[edge.to] = dist;   
            }       
        }
    }
    let result: number[] = [];
    let curr = sink;

    while(previous[curr] !== -1) {
        result.push(curr);
        curr = previous[curr];
    }

     return [source].concat(result.reverse());     
}

function getSmallestDistanceUnvisitedEdge(visited: boolean[], distances: number[]): number {
    let smallestEdgeIndex = Infinity;
    for (let index = 0; index < visited.length; index++) {
        const isNodeVisited = visited[index];
        const distOfNode = distances[index];

        if(!isNodeVisited && distOfNode < smallestEdgeIndex) {
            smallestEdgeIndex = index;   
        }
    }
    return smallestEdgeIndex;
}

function dijkstra_listv2(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {

    const visited: MinHeap = new MinHeap();
    const previous: number[] = new Array(arr.length).fill(-1);
    const distances: number[] = new Array(arr.length).fill(Infinity);

    distances[source] = 0;
    visited.insert(source);
    
    while (visited.data.length > 0) {
        const smallestEdgeNotVisited = visited.delete();

        const node = arr[smallestEdgeNotVisited];
        for (let index = 0; index < node.length; index++) {
            let edge = node[index];
            let dist = distances[smallestEdgeNotVisited] + edge.weight;

            visited.insert(edge.to);
            if(dist < distances[edge.to]) {
                previous[edge.to] = smallestEdgeNotVisited;
                distances[edge.to] = dist;
            }
        }
    }
    let result: number[] = [];
    let curr = sink;

    while(previous[curr] !== -1) {
        result.push(curr);
        curr = previous[curr];
    }

    return [source].concat(result.reverse());
}
