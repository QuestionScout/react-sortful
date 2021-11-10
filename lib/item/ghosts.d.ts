import { Direction } from "../shared";
export declare const initializeGhostElementStyle: (itemElement: HTMLElement, ghostWrapperElement: HTMLElement | undefined, itemSpacing: number, direction: Direction) => void;
export declare const moveGhostElement: (ghostWrapperElement: HTMLElement | undefined, movementXY: [number, number]) => void;
export declare const clearGhostElementStyle: (ghostWrapperElement: HTMLElement | undefined) => void;
