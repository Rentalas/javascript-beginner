import { showCircle } from "./utils";

export const showCircleWithCallBack = (
    cx: number, 
    cy: number, 
    radius: number, 
    showCircleCB: (x: HTMLElement) => void
    ) => {
        const circle = showCircle(cx, cy, radius);
        
        setTimeout(() => showCircleCB(circle), 2100);
    }