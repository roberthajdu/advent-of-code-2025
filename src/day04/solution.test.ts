import { describe, it } from 'node:test';
import assert from 'node:assert';
import { part1, part2 } from './solution.js';

const exampleInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

describe('Day 04', () => {
  it('part1', () => {
    assert.strictEqual(part1(exampleInput), 13);
  });
  it('part2', () => {
    assert.strictEqual(part2(exampleInput), 43);
  });
});
