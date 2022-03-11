export class AssertionError extends Error {
    name = 'AssertionError';
}
export function assert(expr, msg) {
    if (!expr)
        throw new AssertionError(msg);
}
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function randomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
