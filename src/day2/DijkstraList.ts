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
        
        if(smallestEdgeNotVisited == sink) {
            break;
        }

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

    result = [source].concat(result.reverse());     

    return result; 
}

function getSmallestDistanceUnvisitedEdge(visited: boolean[], distances: number[]): number {
    let smallestEdge = Infinity;
    for (let index = 0; index < visited.length; index++) {
        const isNodeVisited = visited[index];
        const distOfNode = distances[index];

        if(!isNodeVisited && distOfNode < smallestEdge) {
            smallestEdge = index;   
        }
    }
    return smallestEdge;
}