import { Direction, ItemIdentifier } from "../items";
import { ElementPosition, NodeMeta } from "../nodes";
export declare const getDropLinePosition: <T extends ItemIdentifier>(absoluteXY: [number, number], nodeMeta: NodeMeta<T>, direction: Direction) => ElementPosition;
export declare const checkIsInStackableArea: <T extends ItemIdentifier>(absoluteXY: [number, number], nodeMeta: NodeMeta<T>, stackableAreaThreshold: number, direciton: Direction) => boolean;
