export function isCellAlive(isCurrentlyAlive, neighbors) {
  const livingNeighborsCount = neighbors.filter(n => n).length;
  return livingNeighborsCount == 3 || isCurrentlyAlive && livingNeighborsCount == 2;
}

export function neighborsOf({row, column}, landscape) {
  const neighbors = [];

  const startingRow = Math.max(row - 1, 0);
  const endingRow = Math.min(row + 1, landscape.length - 1);
  const startingColumn = Math.max(column - 1, 0);
  const endingColumn = Math.min(column + 1, landscape[0].length - 1);
  for (let i = startingRow; i <= endingRow; i++) {
    for (let j = startingColumn; j <= endingColumn; j++) {
      if (i !== row || j !== column) {
        neighbors.push(landscape[i][j]);
      }
    }
  }
  return neighbors;
}
