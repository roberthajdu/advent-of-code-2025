import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Read input.txt from the same directory as the calling module
 */
export function readInput(importMetaUrl: string): string {
  const dir = dirname(fileURLToPath(importMetaUrl));
  return readFileSync(join(dir, 'input.txt'), 'utf-8');
}

/**
 * Split input by blank lines into sections
 */
export function parseSections(input: string): string[] {
  return input.trim().split(/\n\s*\n/);
}

/**
 * Parse input as one number per line
 */
export function parseNumbers(input: string): number[] {
  return input.trim().split('\n').map(Number);
}

/**
 * Parse input as space-separated numbers per line
 */
export function parseNumberRows(input: string): number[][] {
  return input
    .trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number));
}

/**
 * Extract all integers (including negative) from a string
 */
export function extractInts(str: string): number[] {
  const matches = str.match(/-?\d+/g);
  return matches ? matches.map(Number) : [];
}

/**
 * Extract all positive integers from a string
 */
export function extractUints(str: string): number[] {
  const matches = str.match(/\d+/g);
  return matches ? matches.map(Number) : [];
}
