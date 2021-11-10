import { Direction, ItemIdentifier, NodeMeta } from "../shared";
export declare const setDropLineElementStyle: <T extends ItemIdentifier>(dropLineElement: HTMLElement | undefined, absoluteXY: [number, number], nodeMeta: NodeMeta<T>, direction: Direction) => void;
export declare const getDropLinePositionItemIndex: <T extends ItemIdentifier>(dropLineDirection: "TOP" | "RIGHT" | "BOTTOM" | "LEFT" | undefined, draggingItemIndex: number, draggingItemGroupIdentifier: T | undefined, hoveredItemIndex: number, hoveredItemGroupIdentifier: T | undefined) => number;
