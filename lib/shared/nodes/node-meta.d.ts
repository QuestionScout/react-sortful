import { ItemIdentifier } from "../items";
import { ElementPosition } from "./elements";
declare type NodeRect = {
    width: number;
    height: number;
    relativePosition: ElementPosition;
    absolutePosition: ElementPosition;
};
export declare type NodeMeta<T extends ItemIdentifier> = {
    identifier: T;
    groupIdentifier: T | undefined;
    ancestorIdentifiers: T[];
    index: number;
    isGroup: boolean;
    element: HTMLElement;
} & NodeRect;
export declare const getNodeMeta: <T extends ItemIdentifier>(element: HTMLElement, identifier: T, groupIdentifier: T | undefined, ancestorIdentifiers: T[], index: number, isGroup: boolean) => NodeMeta<T>;
export {};
