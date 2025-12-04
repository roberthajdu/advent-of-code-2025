export type Grid<T> = T[][];
export type Point = { x: number; y: number };
export type Dir = [dx: number, dy: number];

/** Cardinal directions: up, right, down, left */
export const DIRS_4: readonly Dir[] = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
] as const;

/** All 8 directions including diagonals */
export const DIRS_8: readonly Dir[] = [
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
] as const;

/** Named direction map */
export const DIR_MAP = {
  U: [0, -1] as Dir,
  D: [0, 1] as Dir,
  L: [-1, 0] as Dir,
  R: [1, 0] as Dir,
  N: [0, -1] as Dir,
  S: [0, 1] as Dir,
  W: [-1, 0] as Dir,
  E: [1, 0] as Dir,
  '^': [0, -1] as Dir,
  v: [0, 1] as Dir,
  '<': [-1, 0] as Dir,
  '>': [1, 0] as Dir,
} as const;

/**
 * Parse string input into character grid
 */
export function parseGrid(input: string): Grid<string> {
  return input
    .trim()
    .split('\n')
    .map(line => [...line]);
}

/**
 * Check if coordinates are within grid bounds
 */
export function inBounds<T>(grid: Grid<T>, x: number, y: number): boolean {
  return y >= 0 && y < grid.length && x >= 0 && x < (grid[0]?.length ?? 0);
}

/**
 * Get value at position (returns undefined if out of bounds)
 */
export function getAt<T>(grid: Grid<T>, x: number, y: number): T | undefined {
  return grid[y]?.[x];
}

/**
 * Set value at position (no-op if out of bounds)
 */
export function setAt<T>(grid: Grid<T>, x: number, y: number, val: T): void {
  if (inBounds(grid, x, y)) {
    grid[y]![x] = val;
  }
}

/**
 * Find first occurrence of target in grid
 */
export function findInGrid<T>(grid: Grid<T>, target: T): Point | undefined {
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y]!;
    for (let x = 0; x < row.length; x++) {
      if (row[x] === target) return { x, y };
    }
  }
  return undefined;
}

/**
 * Find all occurrences of target in grid
 */
export function findAllInGrid<T>(grid: Grid<T>, target: T): Point[] {
  const result: Point[] = [];
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y]!;
    for (let x = 0; x < row.length; x++) {
      if (row[x] === target) result.push({ x, y });
    }
  }
  return result;
}

/**
 * Get valid neighboring positions
 */
export function neighbors<T>(
  grid: Grid<T>,
  x: number,
  y: number,
  dirs: readonly Dir[] = DIRS_4
): Point[] {
  const result: Point[] = [];
  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;
    if (inBounds(grid, nx, ny)) {
      result.push({ x: nx, y: ny });
    }
  }
  return result;
}

/**
 * Iterator over all grid cells
 */
export function* iterGrid<T>(grid: Grid<T>): Generator<{ x: number; y: number; value: T }> {
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y]!;
    for (let x = 0; x < row.length; x++) {
      yield { x, y, value: row[x]! };
    }
  }
}

/**
 * Create a unique string key for a point (for Set/Map)
 */
export function pointKey(x: number, y: number): string {
  return `${x},${y}`;
}

/**
 * Parse a point key back to coordinates
 */
export function parsePointKey(key: string): Point {
  const [x, y] = key.split(',').map(Number);
  return { x: x!, y: y! };
}

/**
 * Create a deep copy of a grid
 */
export function copyGrid<T>(grid: Grid<T>): Grid<T> {
  return grid.map(row => [...row]);
}

/**
 * Create a new grid filled with a value
 */
export function createGrid<T>(width: number, height: number, fill: T): Grid<T> {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => fill));
}

/**
 * Rotate grid 90 degrees clockwise
 */
export function rotateGrid<T>(grid: Grid<T>): Grid<T> {
  const height = grid.length;
  const width = grid[0]?.length ?? 0;
  const result: Grid<T> = createGrid(height, width, grid[0]![0]!);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      result[x]![height - 1 - y] = grid[y]![x]!;
    }
  }
  return result;
}

/**
 * Flip grid horizontally
 */
export function flipHorizontal<T>(grid: Grid<T>): Grid<T> {
  return grid.map(row => [...row].reverse());
}

/**
 * Flip grid vertically
 */
export function flipVertical<T>(grid: Grid<T>): Grid<T> {
  return [...grid].reverse().map(row => [...row]);
}

/**
 * Get grid dimensions
 */
export function gridSize<T>(grid: Grid<T>): { width: number; height: number } {
  return { width: grid[0]?.length ?? 0, height: grid.length };
}

/**
 * Print grid to string
 */
export function gridToString<T>(grid: Grid<T>, separator = ''): string {
  return grid.map(row => row.join(separator)).join('\n');
}
