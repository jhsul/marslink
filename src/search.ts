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
export const getPath = (
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
