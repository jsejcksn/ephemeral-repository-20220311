export class AssertionError extends Error {
  name = 'AssertionError';
}

export function assert (expr: unknown, msg?: string): asserts expr {
  if (!expr) throw new AssertionError(msg);
}

export function delay (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function randomInt (min = 0, max = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
