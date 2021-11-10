import * as React from "react";
import { Direction, ItemIdentifier, NodeMeta } from "../shared";
export declare const getPlaceholderElementStyle: <T extends ItemIdentifier>(draggingNodeMeta: NodeMeta<T> | undefined, itemSpacing: number, direction: Direction) => React.CSSProperties;
export declare const getStackedGroupElementStyle: <T extends ItemIdentifier>(draggingNodeMeta: NodeMeta<T> | undefined, itemSpacing: number, direction: Direction) => React.CSSProperties;
