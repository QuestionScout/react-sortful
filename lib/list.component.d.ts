import * as React from "react";
import { Direction, ItemIdentifier } from "./shared";
import { DragEndMeta, DragStartMeta, DropLineRendererInjectedProps, GhostRendererMeta, PlaceholderRendererInjectedProps, PlaceholderRendererMeta, StackedGroupRendererInjectedProps, StackedGroupRendererMeta, StackGroupMeta } from "./list";
declare type Props<T extends ItemIdentifier> = {
    /**
     * A function to return an element used as a drop line.
     * A drop line is a line to display a destination position to users.
     */
    renderDropLine: (injectedProps: DropLineRendererInjectedProps) => React.ReactNode;
    /**
     * A function to return an element used as a ghost.
     * A ghost is an element following a mouse pointer when dragging.
     */
    renderGhost: (meta: GhostRendererMeta<T>) => React.ReactNode;
    /**
     * A function to return an element used as a placeholder.
     * A placeholder is an element remaining in place when dragging the element.
     */
    renderPlaceholder?: (injectedProps: PlaceholderRendererInjectedProps, meta: PlaceholderRendererMeta<T>) => JSX.Element;
    /** A function to render an item element when an empty group item is hovered by a dragged item. */
    renderStackedGroup?: (injectedProps: StackedGroupRendererInjectedProps, meta: StackedGroupRendererMeta<T>) => JSX.Element;
    /**
     * A spacing size (px) between items.
     * @default 8
     */
    itemSpacing?: number;
    /**
     * A threshold size (px) of stackable area for group items.
     * @default 8
     */
    stackableAreaThreshold?: number;
    /**
     * A direction to recognize a drop area.
     * Note that this will not change styles, so you have to apply styles such as being arranged side by side.
     * @default "vertical"
     */
    direction?: Direction;
    /** A cursor style when dragging. */
    draggingCursorStyle?: React.CSSProperties["cursor"];
    /**
     * Whether all items are not able to move, drag, and stack.
     * @default false
     */
    isDisabled?: boolean;
    /** A callback function after starting of dragging. */
    onDragStart?: (meta: DragStartMeta<T>) => void;
    /** A callback function after end of dragging. */
    onDragEnd: (meta: DragEndMeta<T>) => void;
    /** A callback function when an empty group item is hovered by a dragged item. */
    onStackGroup?: (meta: StackGroupMeta<T>) => void;
    className?: string;
    children?: React.ReactNode;
};
export declare const List: <T extends ItemIdentifier>(props: Props<T>) => JSX.Element;
export {};
