import { describe, it } from 'node:test';
import assert from 'node:assert';
import { part1, part2 } from './solution';

const exampleInput = `987654321111111
811111111111119
234234234234278
818181911112111`;

describe('Day 03', () => {
  it('part1', () => {
    assert.strictEqual(part1(exampleInput), 357);
  });
  it('part2', () => {
    assert.strictEqual(part2(exampleInput), 3121910778619n);
  });
});
