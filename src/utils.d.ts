export declare class AssertionError extends Error {
    name: string;
}
export declare function assert(expr: unknown, msg?: string): asserts expr;
export declare function delay(ms: number): Promise<void>;
export declare function randomInt(min?: number, max?: number): number;
