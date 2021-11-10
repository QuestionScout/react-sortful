import * as React from "react";
import { ItemIdentifier } from "./shared";
declare type Props<T extends ItemIdentifier> = {
    className?: string;
    style?: React.CSSProperties;
    /** A unique identifier in all items of list. */
    identifier: T;
    /** A unique and sequential index number in a parent group. */
    index: number;
    /**
     * Whether an item is possible to have child items.
     * @default false
     */
    isGroup?: boolean;
    /**
     * Whether child items are not able to move and drag.
     * Stacking and popping child items will be allowed. Grandchild items will not be affected.
     * @default false
     */
    isLocked?: boolean;
    /**
     * Whether droppable areas on both sides of an item is disabled.
     * @default false
     */
    isLonely?: boolean;
    /**
     * Whether an item contains custom drag handlers in child items (not grandchildren).
     * @default false
     */
    isUsedCustomDragHandlers?: boolean;
    children?: React.ReactNode;
};
export declare const Item: <T extends ItemIdentifier>(props: Props<T>) => JSX.Element;
export {};
