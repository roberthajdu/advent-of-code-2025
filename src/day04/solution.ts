import { readInput } from '../utils/index.js';
import { parseGrid, DIRS_8, getAt, iterGrid } from '../utils/grid.js';

export function part1(input: string): number {
  const grid = parseGrid(input);
  let count = 0;

  for (const { x, y, value } of iterGrid(grid)) {
    if (value !== '@') continue;

    let adjacentRolls = 0;
    for (const [dx, dy] of DIRS_8) {
      if (getAt(grid, x + dx, y + dy) === '@') {
        adjacentRolls++;
      }
    }

    if (adjacentRolls < 4) {
      count++;
    }
  }

  return count;
}

function findAccessible(grid: string[][]): { x: number; y: number }[] {
  const accessible: { x: number; y: number }[] = [];
  for (const { x, y, value } of iterGrid(grid)) {
    if (value !== '@') continue;

    let adjacentRolls = 0;
    for (const [dx, dy] of DIRS_8) {
      if (getAt(grid, x + dx, y + dy) === '@') {
        adjacentRolls++;
      }
    }

    if (adjacentRolls < 4) {
      accessible.push({ x, y });
    }
  }
  return accessible;
}

export function part2(input: string): number {
  const grid = parseGrid(input);
  let totalRemoved = 0;

  while (true) {
    const accessible = findAccessible(grid);
    if (accessible.length === 0) break;

    for (const { x, y } of accessible) {
      grid[y]![x] = '.';
    }
    totalRemoved += accessible.length;
  }

  return totalRemoved;
}

const input = readInput(import.meta.url);
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
