import { ItemIdentifier, NodeMeta } from "../../shared";
export declare type DragStartMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index" | "isGroup">;
export declare type DragEndMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index" | "isGroup"> & {
    nextGroupIdentifier: T | undefined;
    nextIndex: number | undefined;
};
