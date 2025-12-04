import { readInput } from '../utils';

type Rotation = { direction: 'L' | 'R'; distance: number };

function parseRotations(input: string): readonly Rotation[] {
  return input.trim().split('\n').map(line => ({
    direction: line[0] as 'L' | 'R',
    distance: parseInt(line.slice(1), 10)
  }));
}

export function part1(input: string): number {
  const rotations = parseRotations(input);
  let position = 50;
  let zeroCount = 0;

  for (const { direction, distance } of rotations) {
    if (direction === 'L') {
      position = (position - distance % 100 + 100) % 100;
    } else {
      position = (position + distance) % 100;
    }
    if (position === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}

function countZeroCrossings(position: number, direction: 'L' | 'R', distance: number): number {
  if (distance === 0) return 0;

  if (direction === 'L') {
    // Hit 0 when k ≡ position (mod 100), for k in {1, ..., distance}
    if (position === 0) {
      return Math.floor(distance / 100);
    }
    if (position > distance) return 0;
    return Math.floor((distance - position) / 100) + 1;
  } else {
    // Hit 0 when k ≡ (100 - position) (mod 100), for k in {1, ..., distance}
    if (position === 0) {
      return Math.floor(distance / 100);
    }
    const firstHit = 100 - position;
    if (firstHit > distance) return 0;
    return Math.floor((distance - firstHit) / 100) + 1;
  }
}

export function part2(input: string): number {
  const rotations = parseRotations(input);
  let position = 50;
  let zeroCount = 0;

  for (const { direction, distance } of rotations) {
    zeroCount += countZeroCrossings(position, direction, distance);
    if (direction === 'L') {
      position = (position - distance % 100 + 100) % 100;
    } else {
      position = (position + distance) % 100;
    }
  }

  return zeroCount;
}

const input = readInput(import.meta.url);
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));

