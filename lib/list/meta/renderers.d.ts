/// <reference types="react" />
import { ItemIdentifier, NodeMeta } from "../../shared";
export declare type GhostRendererMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index" | "isGroup">;
export declare type DropLineRendererInjectedProps = {
    ref: React.RefObject<HTMLDivElement>;
    style: React.CSSProperties;
};
export declare type PlaceholderRendererInjectedProps = {
    style: React.CSSProperties;
};
export declare type PlaceholderRendererMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index" | "isGroup">;
export declare type StackedGroupRendererInjectedProps = {
    style: React.CSSProperties;
};
export declare type StackedGroupRendererMeta<T extends ItemIdentifier> = Pick<NodeMeta<T>, "identifier" | "groupIdentifier" | "index">;
