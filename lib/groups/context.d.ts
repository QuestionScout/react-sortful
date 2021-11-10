import * as React from "react";
import { ItemIdentifier } from "../shared";
export declare const Context: React.Context<{
    identifier: string | number | undefined;
    ancestorIdentifiers: ItemIdentifier[];
    childIdentifiersRef: React.MutableRefObject<Set<ItemIdentifier>>;
}>;
