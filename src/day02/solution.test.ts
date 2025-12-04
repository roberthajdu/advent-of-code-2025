import { describe, it } from 'node:test';
import assert from 'node:assert';
import { part1, part2 } from './solution.js';

const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

describe('Day 02', () => {
  it('part1', () => {
    assert.strictEqual(part1(exampleInput), 1227775554);
  });
  it('part2', () => {
    assert.strictEqual(part2(exampleInput), 4174379265);
  });
});
