import { showCircle } from "./utils";

export function delay(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}

export const showCircleWithPromise = (
    cx: number,
    cy: number,
    radius: number,
): Promise<HTMLElement> => {
    return new Promise((resolve, reject) => {
        const circle = showCircle(cx, cy, radius);
        setTimeout(() => resolve(circle), 2100);
    });
}
