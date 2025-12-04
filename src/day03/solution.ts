import { readInput } from '../utils';

function maxJoltage(bank: string): number {
  // Find the two largest digits and form the maximum two-digit number
  // We need the largest digit first, then the second largest that appears AFTER the first
  // Actually: we need to pick two positions and form the number from those digits in order
  
  let max = 0;
  const len = bank.length;
  
  // Try all pairs of positions (i, j) where i < j
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const joltage = parseInt(bank[i] + bank[j], 10);
      if (joltage > max) {
        max = joltage;
      }
    }
  }
  
  return max;
}

export function part1(input: string): number {
  const banks = input.trim().split('\n');
  return banks.reduce((sum, bank) => sum + maxJoltage(bank), 0);
}

function maxJoltageK(bank: string, k: number): bigint {
  const n = bank.length;
  let result = '';
  let startIdx = 0;
  
  for (let remaining = k; remaining > 0; remaining--) {
    const endIdx = n - remaining;
    let maxDigit = '0';
    let maxPos = startIdx;
    
    for (let i = startIdx; i <= endIdx; i++) {
      if (bank[i] > maxDigit) {
        maxDigit = bank[i];
        maxPos = i;
      }
    }
    
    result += maxDigit;
    startIdx = maxPos + 1;
  }
  
  return BigInt(result);
}

export function part2(input: string): bigint {
  const banks = input.trim().split('\n');
  return banks.reduce((sum, bank) => sum + maxJoltageK(bank, 12), 0n);
}

const input = readInput(import.meta.url);
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
