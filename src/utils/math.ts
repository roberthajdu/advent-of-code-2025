/**
 * Greatest common divisor
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

/**
 * Least common multiple
 */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

/**
 * GCD of multiple numbers
 */
export function gcdAll(...nums: number[]): number {
  return nums.reduce(gcd);
}

/**
 * LCM of multiple numbers
 */
export function lcmAll(...nums: number[]): number {
  return nums.reduce(lcm);
}

/**
 * Sum of numbers
 */
export function sum(nums: readonly number[]): number {
  let total = 0;
  for (const n of nums) total += n;
  return total;
}

/**
 * Product of numbers
 */
export function product(nums: readonly number[]): number {
  let total = 1;
  for (const n of nums) total *= n;
  return total;
}

/**
 * Minimum value
 */
export function min(nums: readonly number[]): number {
  let m = Infinity;
  for (const n of nums) if (n < m) m = n;
  return m;
}

/**
 * Maximum value
 */
export function max(nums: readonly number[]): number {
  let m = -Infinity;
  for (const n of nums) if (n > m) m = n;
  return m;
}

/**
 * Proper modulo that handles negative numbers
 */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * Manhattan distance between two points
 */
export function manhattan(x1: number, y1: number, x2: number, y2: number): number {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

/**
 * Generate range [start, end)
 */
export function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i < end; i++) result.push(i);
  return result;
}

/**
 * Generate range [0, n)
 */
export function rangeN(n: number): number[] {
  return range(0, n);
}
