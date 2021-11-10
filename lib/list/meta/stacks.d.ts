import { ItemIdentifier, NodeMeta } from "../../shared";
export declare type StackGroupMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index" | "isGroup"> & {
    nextGroupIdentifier: T | undefined;
};
