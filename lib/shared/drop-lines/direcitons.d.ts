import { Direction, ItemIdentifier } from "../items";
import { NodeMeta } from "../nodes";
export declare type DropLineDirection = "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
export declare const getDropLineDirection: (nodeWidth: number, nodeHeight: number, pointerXY: [number, number], direction: Direction) => "TOP" | "RIGHT" | "BOTTOM" | "LEFT" | undefined;
export declare const getDropLineDirectionFromXY: <T extends ItemIdentifier>(absoluteXY: [number, number], nodeMeta: NodeMeta<T>, direction: Direction) => "TOP" | "RIGHT" | "BOTTOM" | "LEFT" | undefined;
