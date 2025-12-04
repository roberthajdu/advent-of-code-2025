import { describe, it } from 'node:test';
import assert from 'node:assert';
import { part1, part2 } from './solution';

const exampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

describe('Day 01', () => {
  it('part1', () => {
    assert.strictEqual(part1(exampleInput), 3);
  });
  it('part2', () => {
    assert.strictEqual(part2(exampleInput), 6);
  });
});

