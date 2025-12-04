import { readInput } from '../utils/index.js';

function isInvalidPart1(n: number): boolean {
  const s = String(n);
  if (s.length % 2 !== 0) return false;
  const half = s.length / 2;
  return s.slice(0, half) === s.slice(half);
}

function isInvalidPart2(n: number): boolean {
  const s = String(n);
  const len = s.length;
  // Check all divisors d of len where len/d >= 2
  for (let d = 1; d <= len / 2; d++) {
    if (len % d !== 0) continue;
    const pattern = s.slice(0, d);
    if (pattern.repeat(len / d) === s) return true;
  }
  return false;
}

function sumInvalidIds(input: string, isInvalid: (n: number) => boolean): number {
  const ranges = input.trim().split(',').filter(Boolean);
  let sum = 0;
  for (const range of ranges) {
    const [start, end] = range.split('-').map(Number);
    for (let id = start; id <= end; id++) {
      if (isInvalid(id)) sum += id;
    }
  }
  return sum;
}

export function part1(input: string): number {
  return sumInvalidIds(input, isInvalidPart1);
}

export function part2(input: string): number {
  return sumInvalidIds(input, isInvalidPart2);
}

const input = readInput(import.meta.url);
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
