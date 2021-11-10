import { ItemIdentifier } from "../../shared";
export declare type DestinationMeta<T extends ItemIdentifier> = {
    groupIdentifier: T | undefined;
    index: number | undefined;
};
