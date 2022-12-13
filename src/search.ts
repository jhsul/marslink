import { Vector3 } from "@react-three/fiber";

export const distance = (a: Vector3, b: Vector3) =>
  //@ts-ignore
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

export const midPoint = (a: Vector3, b: Vector3) => {
  //@ts-ignore
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
};
/**
 * This is the greedy search algorithm
 */
export const greedySearch = (
  earth: Vector3,
  mars: Vector3,
  satellites: Vector3[],
  maxDist: number
) => {
  const path = [earth];

  const nodes = new Set([...satellites, mars]);

  while (path[path.length - 1] !== mars) {
    const current = path[path.length - 1];

    // Get all the nodes within maxDist
    const neighbors: Set<Vector3> = new Set();

    for (const node of nodes) {
      const d = distance(node, current);
      if (d > maxDist) {
        neighbors.delete(node);
      } else {
        neighbors.add(node);
      }
    }

    // console.log(neighbors);

    // If there are no available neighbors, return null
    if (neighbors.size === 0) return null;

    // Get the node with the shortest distance to mars
    let bestNode: Vector3 | null = null;
    let minDist = Infinity;
    for (const node of neighbors) {
      if (distance(node, mars) < minDist) {
        minDist = distance(node, mars);
        bestNode = node;
      }
    }

    if (!bestNode) return null;

    path.push(bestNode);
    nodes.delete(bestNode);
  }

  return path;
};

export const astarSearch = (
  earth: Vector3,
  mars: Vector3,
  satellites: Vector3[],
  maxDist: number
) => {
  const openSet = new Set([earth]);

  const cameFrom = new Map<Vector3, Vector3>();

  const nodes = [...satellites, mars, earth];

  // Set up the cost map
  const gScore = new Map<Vector3, number>();
  for (const node of nodes) {
    gScore.set(node, Infinity);
  }
  gScore.set(earth, 0);

  // f(n) = g(n) + h(n)
  const fScore = new Map<Vector3, number>();

  for (const node of nodes) {
    fScore.set(node, Infinity);
  }
  fScore.set(earth, distance(earth, mars));

  while (openSet.size > 0) {
    // Get the node with the lowest fScore
    const current = [...openSet].sort(
      (a, b) => fScore.get(a)! - fScore.get(b)!
    )[0];

    if (current === mars) {
      return reconstructPath(cameFrom, current);
    }

    openSet.delete(current);

    for (const neighbor of getNeighbors(
      current,
      new Set([...satellites, mars]),
      maxDist
    )) {
      const tentativeGScore =
        gScore.get(current)! + distance(current, neighbor);

      if (tentativeGScore < gScore.get(neighbor)!) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentativeGScore);
        fScore.set(neighbor, tentativeGScore + distance(neighbor, mars));
        if (!openSet.has(neighbor)) {
          openSet.add(neighbor);
        }
      }
    }
  }
  return null;
};

const reconstructPath = (cameFrom: Map<Vector3, Vector3>, current: Vector3) => {
  const totalPath = [current];
  while (cameFrom.has(current)) {
    current = cameFrom.get(current)!;
    totalPath.push(current);
  }
  return totalPath;
};

const getNeighbors = (node: Vector3, nodes: Set<Vector3>, maxDist: number) => {
  const neighbors = new Set<Vector3>();
  for (const n of nodes) {
    if (distance(node, n) <= maxDist) {
      neighbors.add(n);
    }
  }
  return neighbors;
};
