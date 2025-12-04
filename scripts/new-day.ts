import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const day = process.argv[2];

if (!day) {
  console.error('Usage: npm run new <day>');
  process.exit(1);
}

const dayNum = parseInt(day, 10);
if (isNaN(dayNum) || dayNum < 1 || dayNum > 25) {
  console.error('Day must be a number between 1 and 25');
  process.exit(1);
}

const dayStr = dayNum.toString().padStart(2, '0');
const dirPath = join(process.cwd(), 'src', `day${dayStr}`);

if (existsSync(dirPath)) {
  console.error(`Directory ${dirPath} already exists`);
  process.exit(1);
}

mkdirSync(dirPath, { recursive: true });

const solutionTemplate = `import { readInput } from '../utils/index.js';

export function part1(input: string): number {
  const lines = input.trim().split('\\n');
  // Implementation
  return 0;
}

export function part2(input: string): number {
  const lines = input.trim().split('\\n');
  // Implementation
  return 0;
}

const input = readInput(import.meta.url);
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
`;

const testTemplate = `import { describe, it } from 'node:test';
import assert from 'node:assert';
import { part1, part2 } from './solution.js';

const exampleInput = \`\`;

describe('Day ${dayStr}', () => {
  it('part1', () => {
    assert.strictEqual(part1(exampleInput), 0);
  });

  it('part2', () => {
    assert.strictEqual(part2(exampleInput), 0);
  });
});
`;

writeFileSync(join(dirPath, 'solution.ts'), solutionTemplate);
writeFileSync(join(dirPath, 'solution.test.ts'), testTemplate);
writeFileSync(join(dirPath, 'input.txt'), '');

console.log(`Created src/day${dayStr}/`);
console.log(`  - solution.ts`);
console.log(`  - solution.test.ts`);
console.log(`  - input.txt`);
