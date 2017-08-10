export function isCellAlive(isCurrentlyAlive, neighbors) {
  const livingNeighborsCount = neighbors.filter(n => n).length;
  return livingNeighborsCount == 3 || isCurrentlyAlive && livingNeighborsCount == 2;
}
